import { toast } from "sonner";

export const uploadExcel = async (file: File, courseId: string) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/import-data/${courseId}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      toast.error("Ocurrio un error al subir el archivo");
    } else {
      toast.success("Importacion de datos realizada correctamente");
    }
  } catch (error) {
    toast.error("Ocurrio un error al subir el archivo");
  }
};
