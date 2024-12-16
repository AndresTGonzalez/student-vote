import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ImagesService],
  controllers: [ImagesController],
  imports: [PrismaModule],
})
export class ImagesModule {}
