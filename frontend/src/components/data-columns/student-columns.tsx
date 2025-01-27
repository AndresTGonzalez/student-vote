"use client";

import { useState } from "react";

import { Course } from "@/models/course";
import { Student } from "@/models/student";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";
import { deleteStudent, updateStudent } from "@/redux/services/studentApi";
import StudentFormDialog from "../modals/student-form-dialog";
import { Button } from "../ui/button";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import DeleteDialog from "../modals/delete-dialog";

export const studentColumns: ColumnDef<Student>[] = [
  {
    accessorKey: "identificationCard",
    header: "Cédula",
  },
  {
    accessorKey: "names",
    header: "Nombre",
  },
  {
    accessorKey: "lastNames",
    header: "Apellidos",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const student = row.original as Student;

      const dispatch = useAppDispatch();

      const [open, setOpen] = useState(false);

      const onSubmit = (values: Student) => {
        dispatch(updateStudent(values));
        setOpen(false);
        toast.success("Estudiante actualizado");
      };

      return (
        <div className="flex flex-row space-x-2">
          <StudentFormDialog
            isOpen={open}
            onClose={() => setOpen(false)}
            onSubmit={onSubmit}
            student={useAppSelector((state) =>
              state.students.data.find((c) => c.id === student.id)
            )}
          >
            <Button
              size={"icon"}
              variant={"secondary"}
              onClick={() => setOpen(true)}
            >
              <PencilSimple />
            </Button>
          </StudentFormDialog>
          <DeleteDialog
            title="Eliminar estudiante"
            message="¿Estás seguro de eliminar este estudiante?"
            onConfirm={() => {
              dispatch(deleteStudent(student.id!));
              toast.success("Estudiante eliminado");
            }}
          >
            <Button variant="destructive" size={"icon"}>
              <TrashSimple />
            </Button>
          </DeleteDialog>
        </div>
      );
    },
  },
];
