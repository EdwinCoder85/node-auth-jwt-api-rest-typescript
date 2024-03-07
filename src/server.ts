// Importamos la aplicación Express desde './app'
import app from './app'

// Definimos el puerto en el que escuchará el servidor
const PORT = process.env.PORT

// Iniciamos el servidor Express y lo hacemos escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`)
})