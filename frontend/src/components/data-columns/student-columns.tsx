"use client";

import { Course } from "@/models/course";
import { ColumnDef } from "@tanstack/react-table";

export const studentColumns: ColumnDef<Course>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "names",
    header: "Nombre",
  },
  {
    accessorKey: "lastNames",
    header: "Apellidos",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
  },
];
