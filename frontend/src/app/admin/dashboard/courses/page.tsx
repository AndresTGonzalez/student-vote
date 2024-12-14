"use client";

import { useEffect } from "react";

import PageHeader from "@/components/layout/page-header";

import { DataTable } from "@/components/layout/data-table";
import { courseColumns } from "@/components/data-columns/course-columns";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { fetchCourses } from "@/redux/services/courseApi";
import CourseFormDialog from "@/components/modals/CourseFormDialog";

export default function CoursesPage() {
  const { data, status, error } = useAppSelector((state) => state.courses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("fetching courses");
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col">
      <PageHeader newModal={CourseFormDialog} />
      <div className="px-12 w-full py-5">
        <DataTable columns={courseColumns} data={data} />
      </div>
    </div>
  );
}
