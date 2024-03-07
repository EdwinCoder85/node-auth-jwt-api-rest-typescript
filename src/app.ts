import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import authRoutes from './routes/authRoutes'
import usersRoutes from './routes/userRoutes'

// Creamos una instancia de la aplicación Express
const app = express()

// Middleware para analizar el cuerpo de las solicitudes entrantes en formato JSON
app.use(express.json())

// Routes

// Utilizamos las rutas de autenticación en la ruta '/auth'
app.use('/auth', authRoutes)
app.use('/users', usersRoutes)

// Autenticación

// User

// console.log("Esto está siendo ejecutado")

export default app