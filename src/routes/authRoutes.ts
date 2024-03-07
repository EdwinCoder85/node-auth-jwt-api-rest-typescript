// Importamos el módulo 'express' para crear un enrutador
import express from 'express'
import { login, register } from '../controllers/authController';

// Creamos una instancia de un enrutador Express
const router = express.Router()

// Definimos las rutas para registrar y iniciar sesión de usuarios
router.post('/register', register)  // Ruta para registrar usuarios
router.post('/login', login)     // Ruta para iniciar sesión de usuarios

// Exportamos el enrutador para que pueda ser utilizado por otras partes de la aplicación
export default router