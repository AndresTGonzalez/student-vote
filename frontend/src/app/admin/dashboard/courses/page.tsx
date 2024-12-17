"use client";

import { useState, useEffect } from "react";

import PageHeader from "@/components/layout/page-header";

import { DataTable } from "@/components/layout/data-table";
import { courseColumns } from "@/components/data-columns/course-columns";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { addCourse, fetchCourses } from "@/redux/services/courseApi";
import CourseFormDialog from "@/components/modals/CourseFormDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react";
import { z } from "zod";
import { courseSchema } from "@/models/course";
import { toast } from "sonner";

export default function CoursesPage() {
  const { data, status } = useAppSelector((state) => state.courses);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const onSubmit = (values: z.infer<typeof courseSchema>) => {
    dispatch(addCourse(values));
    setOpen(false);
    toast.success("Curso agregado correctamente");
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col">
      <PageHeader>
        <CourseFormDialog
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={onSubmit}
        >
          <Button onClick={() => setOpen(true)}>
            <Plus />
            Nuevo
          </Button>
        </CourseFormDialog>
      </PageHeader>
      <div className="px-12 w-full py-5">
        <DataTable columns={courseColumns} data={data} />
      </div>
    </div>
  );
}
