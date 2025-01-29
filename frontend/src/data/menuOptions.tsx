import { MenuOption } from "@/models/menuOption";
import {
  ChalkboardSimple,
  Gear,
  House,
  Student,
  UsersThree,
} from "@phosphor-icons/react";

export const menuItems: MenuOption[] = [
  {
    title: "Inicio",
    url: "/admin/dashboard",
    icon: House,
  },
  {
    title: "Estudiantes",
    url: "/admin/dashboard/students",
    icon: Student,
  },
  {
    title: "Cursos",
    url: "/admin/dashboard/courses",
    icon: ChalkboardSimple,
  },
  {
    title: "Listas",
    url: "/admin/dashboard/lists",
    icon: UsersThree,
  },
  {
    title: "Configuraciones",
    url: "/admin/dashboard/settings",
    icon: Gear,
  },
];
