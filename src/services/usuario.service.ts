import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/usuario";


export const insertarUsuario = async (usuario: Partial<Usuario>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Usuario);
    await repository.save(usuario);

}

export const listarUsuario = async (): Promise<Usuario[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.find({
        relations: ['rol'], 
    });
};
export const loginUsuario = async (correo: string, contrasena: string) => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize(); // Esto previene el error si aún no se inicializó
  }

  const repo = AppDataSource.getRepository(Usuario);

  try {
    const usuario = await repo.findOne({
      where: { correo, contrasena },
      relations: ['rol'],
    });

    return usuario;
  } catch (error) {
    console.error("Error en loginUsuario:", error);
    throw new Error("Error al buscar usuario");
  }
};
