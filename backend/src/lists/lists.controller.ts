import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ListsService } from './lists.service';
import { CreateListDto, UpdateListDto } from './lists.model';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  async findAll() {
    return this.listsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.listsService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateListDto) {
    return this.listsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateListDto) {
    return this.listsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.listsService.remove(id);
  }
}
