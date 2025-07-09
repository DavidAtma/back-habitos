import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import * as bcrypt from "bcryptjs";

export const login = async (correo: string, contrasena: string): Promise<Usuario | null> => {
    try {
        if (!AppDataSource.isInitialized) {
            console.log("Inicializando la conexión con la base de datos...");
            await AppDataSource.initialize();
        }

        const repository = AppDataSource.getRepository(Usuario);

        console.log("Correo recibido:", correo);

        const usuario = await repository.findOne({
            where: {
                correo: correo.trim().toLowerCase(),
                estado: true
            },
            relations: ['rol']
        });

        if (!usuario) {
            console.log("No se encontró un usuario activo con ese correo.");
            return null;
        }

        console.log("Usuario encontrado:", usuario);

        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        console.log("¿Coinciden las contraseñas?", isMatch);

        return isMatch ? usuario : null;
    } catch (error) {
        console.error("Error en login (auth.service):", error);
        throw new Error("Error al intentar iniciar sesión");
    }
};
