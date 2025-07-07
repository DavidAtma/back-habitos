import jwt from "jsonwebtoken";
import { Usuario } from "../entities/usuario";

const SECRET_KEY = process.env.JWT_SECRET || "Yoku1510*";

export const generarToken = (usuario: Usuario): string => {
  const payload = {
    idUsuario: usuario.idUsuario,
    correo: usuario.correo,
    rol: usuario.rol?.nombre || "Usuario"
  };

  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: "24h"
  });
};

export const verificarToken = (token: string): any | null => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("Error verificando token JWT:", error);
    return null;
  }
};
