// Definimos una interfaz User para representar la estructura de un usuario en la base de datos
export interface User {
  id: number;       // Identificador único del usuario
  email: string;    // Correo electrónico del usuario
  password: string; // Contraseña del usuario (se recomienda almacenarla de forma segura, como un hash)
}