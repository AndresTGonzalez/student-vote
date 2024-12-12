"use client";

import { Course } from "@/models/course";
import { ColumnDef } from "@tanstack/react-table";

export const listColumns: ColumnDef<Course>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Lista",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
  },
];
