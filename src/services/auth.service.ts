import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import * as bcrypt from "bcryptjs";
import { generarToken } from "../shared/jwt.utils";

export interface LoginResult {
  usuario: Omit<Usuario, "contrasena">;
  token: string;
}

export const login = async (correo: string, contrasena: string): Promise<LoginResult | null> => {
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
    if (!isMatch) {
      return null;
    }

    const token = generarToken(usuario);

    const { contrasena: _, ...usuarioSinContrasena } = usuario;

    return {
      usuario: usuarioSinContrasena as Omit<Usuario, "contrasena">,
      token
    };

  } catch (error) {
    console.error("Error en login (auth.service):", error);
    throw new Error("Error al intentar iniciar sesión");
  }
};
