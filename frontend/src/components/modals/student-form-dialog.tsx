"use client";

import { useState, useEffect } from "react";

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

import { z } from "zod";

import { Student, studentSchema } from "@/models/student";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchCourses } from "@/redux/services/courseApi";
import { Input } from "../ui/input";

type StudentFormDialogProps = {
  student?: Student;
  onSubmit: (values: z.infer<typeof studentSchema>) => void;
  onClose?: () => void;
  children?: React.ReactNode;
  isOpen?: boolean;
};

export default function StudentFormDialog(props: StudentFormDialogProps) {
  const dispatch = useAppDispatch();
  const { data, status } = useAppSelector((state) => state.courses);

  const form = useForm<z.infer<typeof studentSchema>>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      identificationCard: props.student?.identificationCard ?? "",
      names: props.student?.names ?? "",
      lastNames: props.student?.lastNames ?? "",
      canVote: props.student?.canVote ?? false,
      courseId: props.student?.course?.id ?? "",
    },
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

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
            {props.student ? "Actualizar estudiante" : "Nuevo estudiante"}
          </DialogTitle>
          <DialogDescription>
            {props.student
              ? "Actualiza la información del estudiante"
              : "Ingresa la información del nuevo estudiante"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              props.onSubmit(values);
              resetForm();
            })}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="identificationCard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cédula</FormLabel>
                  <FormControl>
                    <Input placeholder="18XXXXXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="names"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombres</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Pedro" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastNames"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cédula</FormLabel>
                  <FormControl>
                    <Input placeholder="Perez González" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Paralelo</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione un curso" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data.map((course) => (
                        <SelectItem key={course.id} value={course.id!}>
                          {course.level} - {course.parallel}
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
