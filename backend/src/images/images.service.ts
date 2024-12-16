import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImageDto } from './images.model';

@Injectable()
export class ImagesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateImageDto) {
    return this.prisma.image.create({ data });
  }

  async findAll() {
    return this.prisma.image.findMany();
  }
}
