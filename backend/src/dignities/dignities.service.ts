import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDignityDto, UpdateDignityDto } from './dignities.model';

@Injectable()
export class DignitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.dignity.findMany();
  }

  async findOne(id: string) {
    return this.prisma.dignity.findUnique({ where: { id } });
  }

  async create(data: CreateDignityDto) {
    return this.prisma.dignity.create({ data });
  }

  async update(id: string, data: UpdateDignityDto) {
    return this.prisma.dignity.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.dignity.delete({ where: { id } });
  }
}
