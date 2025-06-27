import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import * as bcrypt from "bcryptjs";

export const login = async (correo: string, contrasena: string): Promise<Usuario | null> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);

    try {
        const usuario = await repository.findOne({
            where: {
                correo: correo.trim().toLowerCase(),
                estado: true
            },
            relations: ['rol']
        });

        if (!usuario) {
            return null;
        }

        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        
        return isMatch ? usuario : null;

    } catch (error) {
        console.error("Error en login (auth.service):", error);
        throw new Error("Error al intentar iniciar sesión");
    }
};