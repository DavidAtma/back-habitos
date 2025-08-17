import jwt from "jsonwebtoken";
import { Usuario } from "../entities/usuario";

const SECRET_KEY = process.env.JWT_SECRET || "Yoku1510*";

export const generarToken = (usuario: Usuario): string => {
    const payload = {
        idUsuario: usuario.idUsuario,
        correo: usuario.correo,
        rol: usuario.rol.nombre
    };

    return jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
};

export const verificarToken = (token: string) => {

    return jwt.verify(token, SECRET_KEY);
    
};
