"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { MenuOption } from "@/models/menuOption";
import { menuItems } from "@/data/menuOptions";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Plus, UploadSimple } from "@phosphor-icons/react";

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <div className="flex flex-row gap-2">{children}</div>
      </div>
      <Separator />
    </div>
  );
}
