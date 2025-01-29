import { Module } from '@nestjs/common';
import { ImportDataService } from './import-data.service';
import { ImportDataController } from './import-data.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ImportDataService],
  controllers: [ImportDataController],
  imports: [PrismaModule],
})
export class ImportDataModule {}
