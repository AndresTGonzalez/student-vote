import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

// Configuración de Multer
export const multerConfig = {
  storage: diskStorage({
    destination: './uploads', // Carpeta donde se guardarán los archivos
    filename: (req, file, callback) => {
      const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
      callback(null, uniqueName);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // Tamaño máximo de archivo: 5 MB
  },
};
