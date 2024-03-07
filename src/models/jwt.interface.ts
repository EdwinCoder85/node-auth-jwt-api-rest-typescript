// Definimos una interfaz JwtPayload para representar la carga útil de un token JWT
export interface JwtPayload {
  id: number;    // Identificador único del usuario
  email: string; // Correo electrónico del usuario
}
