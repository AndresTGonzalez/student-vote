import PageHeader from "@/components/layout/page-header";

import { DataTable } from "@/components/layout/data-table";
import { listColumns } from "@/components/data-columns/list-columns";

export default function CandidatesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader />
      <div className="px-12 w-full py-5">
        <DataTable columns={listColumns} data={[]} />
      </div>
    </div>
  );
}
