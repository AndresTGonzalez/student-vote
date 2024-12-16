import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { CreateConfigurationDto } from './configuration.model';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get()
  async findAll() {
    return this.configurationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.configurationService.findOne(id);
  }

  @Post()
  async create(@Body() createConfigurationDto: CreateConfigurationDto) {
    return this.configurationService.create(createConfigurationDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConfigurationDto: CreateConfigurationDto,
  ) {
    return this.configurationService.update(id, updateConfigurationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.configurationService.remove(id);
  }
}
