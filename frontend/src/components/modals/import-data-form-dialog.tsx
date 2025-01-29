"use client";

import { useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchCourses } from "@/redux/services/courseApi";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { uploadExcel } from "@/redux/services/importDataApi";

type ImportDataFormDialogProps = {
  onSubmit: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
  isOpen?: boolean;
};

export default function ImportDataFormDialog(props: ImportDataFormDialogProps) {
  const { data, status } = useAppSelector((state) => state.courses);
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);
  const [courseId, setCourseId] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  const downloadTemplate = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/import-data/template`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Error al descargar el archivo");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "template.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error en la descarga:", error);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !courseId) {
      alert("Selecciona un archivo y escribe un ID de curso.");
      return;
    }

    await uploadExcel(file, courseId);

    props.onClose?.();
    setFile(null);
    setCourseId("");
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen} open={props.isOpen}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Importar datos</DialogTitle>
          <DialogDescription>
            Importar un excel con el listado de los estudiantes
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Select onValueChange={(courseId) => setCourseId(courseId)}>
            <SelectTrigger className="max-w-md">
              <SelectValue placeholder="Seleccione un curso" />
            </SelectTrigger>
            <SelectContent>
              {data.map((course) => (
                <SelectItem key={course.id} value={course.id!}>
                  {course.level} - {course.parallel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input type="file" onChange={handleFileChange}></Input>
          <Button
            className="w-fit h-fit py-0 px-1 m-0 text-neutral-700"
            variant={"link"}
            onClick={downloadTemplate}
          >
            Descargar plantilla
          </Button>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                props.onClose?.();
              }}
            >
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => {
                handleUpload();
              }}
            >
              Importar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
