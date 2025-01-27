"use client";

// Importaciones de librerías externas
import { useState, useEffect } from "react";
import { z } from "zod";
import { Plus } from "@phosphor-icons/react";
import { toast } from "sonner";

// Importaciones de componentes
import PageHeader from "@/components/layout/page-header";
import { DataTable } from "@/components/layout/data-table";
import { studentColumns } from "@/components/data-columns/student-columns";
import StudentFormDialog from "@/components/modals/student-form-dialog";
import { Button } from "@/components/ui/button";

// Importaciones de modelos y esquemas
import { studentSchema } from "@/models/student";

// Importaciones de Redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addStudent, fetchStudents } from "@/redux/services/studentApi";

/**
 * StudentsPage: Componente principal de la página de gestión de estudiantes.
 *
 * Este componente muestra una tabla con los datos de los estudiantes y permite
 * agregar nuevos estudiantes utilizando un formulario modal.
 */
export default function StudentsPage() {
  const { data, status } = useAppSelector((state) => state.students);
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Carga inicial de datos cuando el estado es "idle".
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [dispatch, status]);

  /**
   * Maneja el envío del formulario para agregar un estudiante.
   *
   * @param values - Datos del estudiante que cumplen con el esquema definido.
   * @throws {ZodError} Si los datos no cumplen con el esquema definido.
   */
  const handleFormSubmit = (values: z.infer<typeof studentSchema>) => {
    dispatch(addStudent(values));
    setIsDialogOpen(false);
    toast.success("Estudiante agregado correctamente");
  };

  return (
    <div className="flex flex-col">
      <PageHeader>
        <StudentFormDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleFormSubmit}
        >
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus />
            Nuevo
          </Button>
        </StudentFormDialog>
      </PageHeader>
      <div className="px-12 w-full py-5">
        <DataTable columns={studentColumns} data={data} />
      </div>
    </div>
  );
}
