import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DignitiesService } from './dignities.service';
import { CreateDignityDto, UpdateDignityDto } from './dignities.model';

@Controller('dignities')
export class DignitiesController {
  constructor(private readonly dignitiesService: DignitiesService) {}

  @Get()
  async findAll() {
    return this.dignitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.dignitiesService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateDignityDto) {
    return this.dignitiesService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateDignityDto) {
    return this.dignitiesService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.dignitiesService.remove(id);
  }
}
