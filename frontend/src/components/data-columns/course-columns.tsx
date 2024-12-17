"use client";

import { useState } from "react";

import { Course } from "@/models/course";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import DeleteDialog from "../modals/DeleteDialog";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { deleteCourse, updateCourse } from "@/redux/services/courseApi";
import { toast } from "sonner";
import CourseFormDialog from "../modals/CourseFormDialog";

export const courseColumns: ColumnDef<Course>[] = [
  {
    accessorKey: "level",
    header: "Curso",
  },
  {
    accessorKey: "parallel",
    header: "Paralelo",
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const course = row.original as Course;

      const dispatch = useAppDispatch();

      const [open, setOpen] = useState(false);

      const onSubmit = (values: Course) => {
        dispatch(updateCourse(values));
        setOpen(false);
        toast.success("Curso actualizado");
      };

      return (
        <div className="flex flex-row space-x-2">
          <CourseFormDialog
            isOpen={open}
            onClose={() => setOpen(false)}
            onSubmit={onSubmit}
            course={useAppSelector((state) =>
              state.courses.data.find((c) => c.id === course.id)
            )}
          >
            <Button
              size={"icon"}
              variant={"secondary"}
              onClick={() => setOpen(true)}
            >
              <PencilSimple />
            </Button>
          </CourseFormDialog>
          <DeleteDialog
            title="Eliminar curso"
            message="¿Estás seguro de eliminar este curso?"
            onConfirm={() => {
              dispatch(deleteCourse(course.id!));
              toast.success("Curso eliminado");
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
