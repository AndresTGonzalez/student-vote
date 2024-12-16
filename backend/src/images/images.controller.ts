import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';
import { multerConfig } from './multer.config';
import { CreateImageDto } from './images.model';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new Error('No file uploaded');
    }

    // Construir la URL donde se almacenará la imagen
    const fileUrl = `uploads/${file.filename}`;

    const image: CreateImageDto = {
      url: fileUrl,
    };

    // Guardar la imagen en la base de datos
    const savedFile = await this.imagesService.create(image);

    return {
      message: 'File uploaded successfully',
      data: savedFile,
    };
  }

  @Get()
  async getAllFiles() {
    const files = await this.imagesService.findAll();
    return files;
  }
}
