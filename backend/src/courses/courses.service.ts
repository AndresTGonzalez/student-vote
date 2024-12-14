import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto, UpdateCourseDto } from './course.model';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany();
  }

  async findOne(id: string) {
    return this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: CreateCourseDto) {
    return this.prisma.course.create({
      data,
    });
  }

  async update(id: string, data: UpdateCourseDto) {
    return this.prisma.course.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.course.delete({
      where: {
        id,
      },
    });
  }
}
