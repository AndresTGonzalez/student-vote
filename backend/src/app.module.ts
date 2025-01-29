import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './prisma/prisma.module';
import { StudentsModule } from './students/students.module';
import { DignitiesModule } from './dignities/dignities.module';
import { CandidatesModule } from './candidates/candidates.module';
import { ListsModule } from './lists/lists.module';
import { ImagesModule } from './images/images.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ImportDataModule } from './import-data/import-data.module';

@Module({
  imports: [
    CoursesModule,
    PrismaModule,
    StudentsModule,
    DignitiesModule,
    CandidatesModule,
    ListsModule,
    ImagesModule,
    ConfigurationModule,
    ImportDataModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
