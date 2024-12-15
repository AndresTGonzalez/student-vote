import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCandidateDto, UpdateCandidateDto } from './candidates.model';

@Injectable()
export class CandidatesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.candidate.findMany();
  }

  async findOne(id: string) {
    return this.prisma.candidate.findUnique({ where: { id } });
  }

  async create(data: CreateCandidateDto) {
    return this.prisma.candidate.create({ data });
  }

  async update(id: string, data: UpdateCandidateDto) {
    return this.prisma.candidate.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.candidate.delete({ where: { id } });
  }
}
