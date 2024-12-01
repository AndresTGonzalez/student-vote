"use client";

import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function YesVotePage() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-50">
      <div className="w-1/2 h-fit py-3 px-8 rounded-2xl shadow-md bg-white flex flex-col">
        <div className="flex flex-col gap-4 py-10 w-full h-fit items-center justify-center">
          <Image
            src="/logo/logo.svg"
            alt="Ilustración"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-1 justify-center items-center">
            <h2 className="text-2xl">Elecciones Estudiantiles 2024 - 2025</h2>
            <p className="text-sm text-gray-500">
              Seleccione una opción para continuar
            </p>
          </div>
          <div className="w-full flex px-52 flex-col gap-5">
            <div className="flex flex-col gap-2 w-full h-fit">
              <Label htmlFor="course" className="ml-3">
                Curso
              </Label>
              <Select name="course">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione un curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-full h-fit">
              <Label htmlFor="student" className="ml-3">
                Estudiante
              </Label>
              <Select name="student">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccione un estudiante" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size={"lg"} className="w-full">
              <span>Continuar</span>
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-end px-3">
          <Button size={"default"} variant={"link"} onClick={handleReturnHome}>
            <span>Volver al inicio</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
