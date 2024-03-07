import { User } from "../models/user.interface"
import jwt from "jsonwebtoken"

// Clave secreta para firmar el token JWT, se utiliza la proporcionada en la variable de entorno JWT_SECRET o una clave predeterminada
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret'

// Función para generar un token JWT para un usuario
export const generateToken = (user: User): string => {
  // Firmamos el token JWT con el id y correo electrónico del usuario y establecemos un tiempo de expiración de 1 hora
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })
}
