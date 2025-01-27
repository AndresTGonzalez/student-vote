"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotVotePage() {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col bg-white justify-start items-center">
      <nav className="px-10 w-full h-fit flex flex-row gap-10 items-center py-2">
        <Image src="/logo/logo.svg" alt="Ilustración" width={50} height={50} />
        <h2 className="text-2xl">Sistema de Elecciones Estudiantiles</h2>
      </nav>
      <div className="w-full h-fit py-10 flex flex-col gap-4 flex-grow-0 justify-center items-center ">
        <Image
          src="/error/stop.svg"
          alt="Ilustración"
          width={500}
          height={500}
        />
        <div className="flex flex-col">
          <h2 className="text-2xl">Votaciones cerradas o no iniciadas</h2>
          <p className="text-sm text-gray-500">
            Las votaciones no están disponibles en este momento
          </p>
        </div>
        <Button variant={"default"} className="w-96" onClick={handleReturnHome}>
          <span>Regresar</span>
        </Button>
      </div>
    </div>
  );
}