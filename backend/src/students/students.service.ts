import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.student.findMany({ include: { course: true } });
  }

  async findOne(id: string) {
    return this.prisma.student.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.prisma.student.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.student.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.student.delete({ where: { id } });
  }

  async findStudentsByCourse(courseId: string) {
    return this.prisma.student.findMany({
      where: { courseId },
      include: { course: true },
    });
  }
}
