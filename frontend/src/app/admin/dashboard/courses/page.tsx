"use client";

import PageHeader from "@/components/layout/page-header";

import { DataTable } from "@/components/layout/data-table";
import { courseColumns } from "@/components/data-columns/course-columns";

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <div className="px-12 w-full py-5">
        <DataTable columns={courseColumns} data={[]} />
      </div>
    </div>
  );
}
