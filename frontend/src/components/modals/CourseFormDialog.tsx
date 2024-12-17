"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Course, courseSchema } from "@/models/course";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { parallels } from "@/data/paralles";
import { useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";

type CourseFormDialogProps = {
  course?: Course;
  onSubmit: (values: z.infer<typeof courseSchema>) => void;
  onClose?: () => void;
  children?: React.ReactNode;
  isOpen?: boolean;
};

export default function CourseFormDialog(props: CourseFormDialogProps) {
  const { status } = useAppSelector((state) => state.courses);

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      id: props.course?.id ?? undefined,
      level: props.course?.level ?? "",
      parallel: props.course?.parallel ?? "A",
    },
  });

  useEffect(() => {
    if (props.course) {
      form.reset({
        id: props.course.id,
        level: props.course.level,
        parallel: props.course.parallel,
      });
    }
  }, [props.course, form]);

  const resetForm = () => {
    form.reset();
  };

  return (
    <Dialog
      onOpenChange={(isOpen) => !isOpen && form.reset()}
      open={props.isOpen}
    >
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {props.course ? "Actualizar curso" : "Nuevo curso"}
          </DialogTitle>
          <DialogDescription>
            {props.course
              ? "Actualiza la información del curso"
              : "Ingresa la información del nuevo curso"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              props.onSubmit(values);
              console.log(values);
              resetForm();
            })}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nivel</FormLabel>
                  <FormControl>
                    <Input placeholder="Primero de bachillerato" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parallel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Paralelo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="A" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {parallels.map((parallel) => (
                        <SelectItem key={parallel.value} value={parallel.value}>
                          {parallel.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    props.onClose?.();
                    resetForm();
                  }}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Guardando..." : "Guardar"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
