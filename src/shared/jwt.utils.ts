import jwt from "jsonwebtoken";
import { Usuario } from "../entities/usuario";

const SECRET_KEY = process.env.JWT_SECRET || "Yoku1510*";

// Crear token
export const generarToken = (usuario: Usuario): string => {
    const payload = {
        idUsuario: usuario.idUsuario,
        correo: usuario.correo,
        rol: usuario.rol.nombre
    };

    return jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
};

// Verificar token
export const verificarToken = (token: string) => {
    return jwt.verify(token, SECRET_KEY);
};
