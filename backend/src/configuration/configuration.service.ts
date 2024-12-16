import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateConfigurationDto } from './configuration.model';

@Injectable()
export class ConfigurationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateConfigurationDto) {
    return this.prisma.configuration.create({ data });
  }

  async findAll() {
    return this.prisma.configuration.findMany();
  }

  async findOne(id: string) {
    return this.prisma.configuration.findUnique({ where: { id } });
  }

  async update(id: string, data: CreateConfigurationDto) {
    return this.prisma.configuration.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.configuration.delete({ where: { id } });
  }
}
