import PageHeader from "@/components/layout/page-header";

import { DataTable } from "@/components/layout/data-table";
import { studentColumns } from "@/components/data-columns/student-columns";

export default function StudentsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <div className="px-12 w-full py-5">
        <DataTable columns={studentColumns} data={[]} />
      </div>
    </div>
  );
}
