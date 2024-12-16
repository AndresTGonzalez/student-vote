import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationController } from './configuration.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ConfigurationService],
  controllers: [ConfigurationController],
  imports: [PrismaModule],
})
export class ConfigurationModule {}
