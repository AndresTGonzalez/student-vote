import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto } from './students.model';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll() {
    console.log('Se ejecuta');
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Get('course/:course')
  async findStudentsByCourse(@Param('course') courseId: string) {
    return this.studentsService.findStudentsByCourse(courseId);
  }

  @Post()
  async create(@Body() data: CreateStudentDto) {
    return this.studentsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateStudentDto) {
    return this.studentsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
