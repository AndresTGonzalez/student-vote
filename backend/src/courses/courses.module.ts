import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [CoursesService],
  controllers: [CoursesController],
  imports: [PrismaModule],
})
export class CoursesModule {}
