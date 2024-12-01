"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGoToVote = () => {
    router.push("/vote");
  };

  const handleGoToAdmin = () => {
    router.push("/admin/login");
  };

  return (
    <div className="w-full h-full bg-white flex flex-row">
      <div className="w-1/2 h-full relative flex flex-col items-center justify-center">
        <Image
          src="/photos/students.jpg"
          alt="Ilustración"
          fill
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 h-full px-36 flex flex-col items-center justify-center bg-white">
        <div className="w-full h-fit p-8">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <Image
                src="/logo/logo.svg"
                alt="Ilustración"
                width={75}
                height={75}
              />
              <div className="flex flex-col">
                <h2 className="text-2xl">
                  Elecciones Estudiantiles 2024 - 2025
                </h2>
                <p className="text-sm text-gray-500">
                  Seleccione una opción para continuar
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <Button size={"lg"} onClick={handleGoToAdmin}>
                <span>Panel de administrador</span>
              </Button>
              <Button
                size={"lg"}
                variant={"secondary"}
                onClick={handleGoToVote}
              >
                <span>Votar</span>
              </Button>
            </div>
            <div className="w-fit h-fit flex flex-col gap-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
