import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import * as XLSX from 'xlsx';
import { Response } from 'express';
import {
  ApiConsumes,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Importación de Datos')
@Controller('import-data')
export class ImportDataController {
  // 📌 Endpoint para descargar el template
  @Get('template')
  @ApiOperation({ summary: 'Descargar template en formato Excel' })
  @ApiResponse({ status: 200, description: 'Archivo de template generado' })
  downloadTemplate(@Res() res: Response) {
    // Crear datos vacíos con los encabezados requeridos
    const data = [{ Cedula: '', Nombres: '', Apellidos: '' }];

    // Crear el libro de Excel
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Template');

    // Convertir a un buffer
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Configurar la respuesta HTTP con el archivo
    res.setHeader('Content-Disposition', 'attachment; filename=template.xlsx');
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(buffer);
  }

  @Post(':courseId')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(xlsx)$/)) {
          return callback(
            new BadRequestException('Only .xlsx files are allowed!'),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'courseId', type: String, description: 'ID del curso' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(
    @Param('courseId') courseId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded or invalid format.');
    }

    if (!courseId) {
      throw new BadRequestException('Course ID is required.');
    }

    // Leer el archivo Excel en memoria
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0]; // Primera hoja
    const sheet = workbook.Sheets[sheetName];

    // Convertir la hoja a JSON
    const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

    // Validar que las columnas requeridas existan
    const requiredColumns = ['Cedula', 'Nombres', 'Apellidos'];
    const missingColumns = requiredColumns.filter(
      (col) => !jsonData[0]?.hasOwnProperty(col),
    );

    if (missingColumns.length > 0) {
      throw new BadRequestException(
        `Missing columns: ${missingColumns.join(', ')}`,
      );
    }

    // Procesar los datos con el ID del curso
    jsonData.forEach((row) => {
      console.log(
        `Curso ID: ${courseId} - Procesando: ${row.Cedula} - ${row.Nombre} ${row.Apellido}`,
      );
      // Aquí puedes insertar en la base de datos junto con el ID del curso
    });

    return {
      message: `File processed successfully for course ${courseId}`,
      data: jsonData,
    };
  }
}
