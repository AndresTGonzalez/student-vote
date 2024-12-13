"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { MenuOption } from "@/models/menuOption";
import { menuItems } from "@/data/menuOptions";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Plus, UploadSimple } from "@phosphor-icons/react";

type PageHeaderProps = {
  handleNew?: () => void;
  handleImport?: () => void;
  newModal?: React.ComponentType;
};

export default function PageHeader(props: PageHeaderProps) {
  const pathname = usePathname();

  const [item, setItem] = useState<MenuOption | null>(null);

  useEffect(() => {
    const menuItem = menuItems.find((item) => item.url === pathname);
    setItem(menuItem!);
  }, [pathname]);

  return (
    <div className="px-12 w-full flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-row gap-7 items-center text-2xl">
          {item?.icon && <item.icon />}
          <h2 className="font-medium">{item?.title || ""}</h2>
        </div>
        <div className="flex flex-row gap-2">
          {props.handleNew && (
            <Button className="flex flex-row">
              <Plus className="w-5 h-5" />
              <span className="text-sm">Nuevo</span>
            </Button>
          )}
          {props.newModal && <props.newModal />}
          {props.handleImport && (
            <Button variant={"secondary"} className="flex flex-row">
              <UploadSimple className="w-5 h-5" />
              <span className="text-sm">Importar estudiantes</span>
            </Button>
          )}
        </div>
      </div>
      <Separator />
    </div>
  );
}
