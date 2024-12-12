"use client";

import { Course } from "@/models/course";
import { ColumnDef } from "@tanstack/react-table";

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
    header: "Acciones",
  },
];
