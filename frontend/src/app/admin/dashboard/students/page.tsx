"use client";

import { useState, useEffect, use } from "react";
import { z } from "zod";
import { ArrowSquareIn, Plus } from "@phosphor-icons/react";
import { toast } from "sonner";

import PageHeader from "@/components/layout/page-header";
import { DataTable } from "@/components/layout/data-table";
import { studentColumns } from "@/components/data-columns/student-columns";
import StudentFormDialog from "@/components/modals/student-form-dialog";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { studentSchema } from "@/models/student";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addStudent, fetchStudentsByCourse } from "@/redux/services/studentApi";
import { fetchCourses } from "@/redux/services/courseApi";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import ImportDataFormDialog from "@/components/modals/import-data-form-dialog";

export default function StudentsPage() {
  const { data } = useAppSelector((state) => state.students);
  const { data: courses, status: coursesStatus } = useAppSelector(
    (state) => state.courses
  );

  const dispatch = useAppDispatch();

  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isImportDataDialogOpen, setIsImportDataDialogOpen] = useState(false);

  useEffect(() => {
    if (coursesStatus === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, coursesStatus]);

  const handleFormSubmit = (values: z.infer<typeof studentSchema>) => {
    dispatch(addStudent(values));
    setIsStudentDialogOpen(false);
    toast.success("Estudiante agregado correctamente");
  };

  const handleOnCourseChange = (courseId: string) => {
    dispatch(fetchStudentsByCourse(courseId));
  };

  return (
    <div className="flex flex-col">
      <PageHeader>
        <ImportDataFormDialog
          isOpen={isImportDataDialogOpen}
          onClose={() => setIsImportDataDialogOpen(false)}
          onSubmit={() => {}}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={"secondary"}
                  size={"icon"}
                  onClick={() => setIsImportDataDialogOpen(true)}
                >
                  <ArrowSquareIn />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-neutral-700">
                <p>Importar estudiantes</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ImportDataFormDialog>
        <StudentFormDialog
          isOpen={isStudentDialogOpen}
          onClose={() => setIsStudentDialogOpen(false)}
          onSubmit={handleFormSubmit}
        >
          <Button onClick={() => setIsStudentDialogOpen(true)}>
            <Plus />
            Nuevo
          </Button>
        </StudentFormDialog>
      </PageHeader>
      <div className="px-12 w-full flex flex-col gap-4 py-5">
        <div className="flex flex-row items-center gap-2">
          <Label>
            <span>Curso: </span>
          </Label>
          <Select onValueChange={(courseId) => handleOnCourseChange(courseId)}>
            <SelectTrigger className="max-w-md">
              <SelectValue placeholder="Seleccione un curso" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course.id} value={course.id!}>
                  {course.level} - {course.parallel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <DataTable columns={studentColumns} data={data} />
      </div>
    </div>
  );
}
