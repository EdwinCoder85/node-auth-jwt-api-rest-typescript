import bcrypt from 'bcrypt'

// Número de saltos de rondas para la encriptación de contraseñas
const SALT_ROUNDS: number = 10

// Función asincrónica para generar un hash de contraseña utilizando bcrypt
export const hashPassword = async (password: string): Promise<string> => {
  // Generamos un hash de la contraseña utilizando bcrypt
  return await bcrypt.hash(password, SALT_ROUNDS)
}

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}
