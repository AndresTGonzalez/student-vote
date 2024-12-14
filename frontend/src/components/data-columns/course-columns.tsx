"use client";

import { Course } from "@/models/course";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";

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
    cell: (row) => {
      return (
        <div className="flex flex-row space-x-2">
          <Button variant="secondary" size={"icon"}>
            <PencilSimple />
          </Button>
          <Button variant="destructive" size={"icon"}>
            <TrashSimple />
          </Button>
        </div>
      );
    },
  },
];
