import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CoursesModule, PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
