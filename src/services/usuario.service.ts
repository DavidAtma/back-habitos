import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";

// Insertar usuario
export const insertarUsuario = async (usuario: Partial<Usuario>): Promise<Usuario> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.save(usuario);
};

// Listar todos los usuarios
export const listarUsuarios = async (): Promise<Usuario[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.find({
        relations: ['rol'],
        order: { idUsuario: "DESC" }
    });
};

// Buscar usuario por correo
export const buscarUsuarioPorCorreo = async (correo: string): Promise<Usuario | null> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.findOne({
        where: { correo },
        relations: ['rol']
    });
};

// Actualizar usuario
export const actualizarUsuario = async (idUsuario: number, data: Partial<Usuario>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    await repository.update({ idUsuario }, data);
};

// Eliminar usuario
export const eliminarUsuario = async (idUsuario: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    await repository.delete({ idUsuario });
};

// Login de usuario
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

