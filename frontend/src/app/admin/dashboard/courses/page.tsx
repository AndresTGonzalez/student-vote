"use client";

// Importaciones de librerías externas
import { useState, useEffect } from "react";
import { z } from "zod";
import { Plus } from "@phosphor-icons/react";
import { toast } from "sonner";

// Importaciones de componentes
import PageHeader from "@/components/layout/page-header";
import { DataTable } from "@/components/layout/data-table";
import { courseColumns } from "@/components/data-columns/course-columns";
import CourseFormDialog from "@/components/modals/course-form-dialog";
import { Button } from "@/components/ui/button";

// Importaciones de modelos y esquemas
import { courseSchema } from "@/models/course";

// Importaciones de Redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCourse, fetchCourses } from "@/redux/services/courseApi";

/**
 * CoursesPage: Componente principal de la página de gestión de cursos.
 *
 * Este componente muestra una tabla con los datos de los cursos y permite
 * agregar nuevos cursos utilizando un formulario modal.
 */
export default function CoursesPage() {
  const { data, status } = useAppSelector((state) => state.courses);
  const dispatch = useAppDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  /**
   * Maneja el envío del formulario para agregar un curso.
   *
   * @param values - Datos del curso que cumplen con el esquema definido.
   * @throws {ZodError} Si los datos no cumplen con el esquema definido.
   */
  const handleFormSubmit = (values: z.infer<typeof courseSchema>) => {
    dispatch(addCourse(values));
    setIsDialogOpen(false);
    toast.success("Curso agregado correctamente");
  };

  // Carga inicial de datos cuando el estado es "idle".
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col">
      <PageHeader>
        <CourseFormDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onSubmit={handleFormSubmit}
        >
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus />
            Nuevo
          </Button>
        </CourseFormDialog>
      </PageHeader>
      <div className="px-12 w-full py-5">
        <DataTable columns={courseColumns} data={data} />
      </div>
    </div>
  );
}
