import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto, UpdateCandidateDto } from './candidates.model';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  async findAll() {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.candidatesService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateCandidateDto) {
    return this.candidatesService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateCandidateDto) {
    return this.candidatesService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.candidatesService.remove(id);
  }
}
