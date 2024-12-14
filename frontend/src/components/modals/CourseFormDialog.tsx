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

import { Plus } from "@phosphor-icons/react";

import { courseSchema } from "@/models/course";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { parallels } from "@/data/paralles";
import { addCourse } from "@/redux/services/courseApi";
import { useAppDispatch } from "@/redux/hooks";

export default function CourseFormDialog() {
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      level: "",
      parallel: "A",
    },
  });

  const onSubmit = (values: z.infer<typeof courseSchema>) => {
    dispatch(addCourse(values));
    form.reset();
  };

  const handleCancel = () => {
    form.reset();
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && form.reset()}>
      <DialogTrigger asChild>
        <Button className="flex flex-row">
          <Plus className="w-5 h-5" />
          <span className="text-sm">Nuevo</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nuevo curso</DialogTitle>
          <DialogDescription>
            Ingrese los datos del nuevo curso.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Guardar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
