import { Module } from '@nestjs/common';
import { DignitiesService } from './dignities.service';
import { DignitiesController } from './dignities.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [DignitiesService],
  controllers: [DignitiesController],
  imports: [PrismaModule],
})
export class DignitiesModule {}
