"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

export default function DeleteDialog({
  children,
  onConfirm,
  title,
  message,
}: {
  children: React.ReactNode;
  onConfirm: () => void;
  title: string;
  message: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{message}</DialogDescription>
        <div className="flex flex-row gap-2 items-center justify-end w-full mt-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onConfirm} variant={"destructive"}>
              Eliminar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
