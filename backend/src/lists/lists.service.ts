import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateListDto, UpdateListDto } from './lists.model';

@Injectable()
export class ListsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.list.findMany();
  }

  async findOne(id: string) {
    return this.prisma.list.findUnique({ where: { id } });
  }

  async create(data: CreateListDto) {
    return this.prisma.list.create({ data });
  }

  async update(id: string, data: UpdateListDto) {
    return this.prisma.list.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.list.delete({ where: { id } });
  }
}
