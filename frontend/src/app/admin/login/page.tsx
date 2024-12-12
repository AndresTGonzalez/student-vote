"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  const handleGoToAdmin = () => {
    router.push("/admin/dashboard");
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
            <h2 className="text-2xl">Bienvenido al Panel de Administrador</h2>
            <p className="text-sm text-gray-500">
              Inicie sesión para continuar
            </p>
          </div>
          <div className="w-full flex px-52 flex-col gap-5">
            <div className="flex flex-col gap-2 w-full h-fit">
              <Label htmlFor="user" className="ml-3">
                Usuario
              </Label>
              <Input name="user" placeholder="Ingrese su usuario" />
            </div>
            <div className="flex flex-col gap-2 w-full h-fit">
              <Label htmlFor="password" className="ml-3">
                Contraseña
              </Label>
              <Input
                name="password"
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <Button size={"lg"} className="w-full" onClick={handleGoToAdmin}>
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
