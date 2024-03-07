// Importamos la clase PrismaClient desde '@prisma/client' para interactuar con la base de datos
import { PrismaClient } from '@prisma/client';

// Creamos una instancia de PrismaClient para acceder a los modelos y métodos de la base de datos
const prisma = new PrismaClient()

// Exportamos el modelo de usuario para que pueda ser utilizado por otras partes de la aplicación
export default prisma.user