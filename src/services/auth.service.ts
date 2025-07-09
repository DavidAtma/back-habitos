import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import * as bcrypt from "bcryptjs";

export const login = async (correo: string, contrasena: string): Promise<Usuario | null> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);

    console.log("Correo recibido:", correo);
    console.log("Contraseña recibida:", contrasena);

    try {
        const usuario = await repository.findOne({
            where: {
                correo: correo.trim().toLowerCase(),
                estado: true
            },
            relations: ['rol']
        });

        console.log("🔍 Usuario encontrado:", usuario);

        if (!usuario) {
            console.log("No se encontró el usuario.");
            return null;
        }

        console.log("🔑 Contraseña en BD (hash):", usuario.contrasena);

        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

        console.log("✅ ¿Coinciden las contraseñas?", isMatch);

        return isMatch ? usuario : null;

    } catch (error) {
        console.error("Error en login (auth.service):", error);
        throw new Error("Error al intentar iniciar sesión");
    }
};
