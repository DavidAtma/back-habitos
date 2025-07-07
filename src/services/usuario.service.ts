import { AppDataSource } from "../config/appdatasource";
import { Usuario } from "../entities/usuario";
import * as bcrypt from 'bcryptjs';

// Insertar usuario
export const insertarUsuario = async (usuario: Partial<Usuario>): Promise<Usuario> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    
    const correo = usuario.correo.trim().toLowerCase();

    const usuarioExistente = await repository.findOne({
        where: { correo }
    });

    if (usuarioExistente) {
        throw new Error("El correo ya está registrado");
    }

    const contrasenaHash = await bcrypt.hash(usuario.contrasena, 10);
    
    usuario.correo = correo;
    usuario.contrasena = contrasenaHash;

    return await repository.save(usuario);
};

// Listar todos los usuarios activos
export const listarUsuariosActivos = async (): Promise<Usuario[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.find({
        relations: ['rol'],
        where: { estado: true },
        order: { idUsuario: "DESC" }
    });
};

// Listar todos los usuarios
export const listarUsuarios = async (): Promise<Usuario[]> => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  return await AppDataSource.getRepository(Usuario).find({
    order: { idUsuario: "ASC" },
    relations: ["rol"]
  });
};

// Actualizar usuario
export const actualizarUsuario = async (idUsuario: number, data: Partial<Usuario>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);

    if (data.contrasena) {
        data.contrasena = await bcrypt.hash(data.contrasena, 10);
    }

    await repository.update({ idUsuario }, data);
};

// Eliminar usuario
export const eliminarUsuario = async (idUsuario: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    await repository.update({ idUsuario }, { estado: false });
};

// Activar usuario
export const activarUsuario = async (idUsuario: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    await repository.update({ idUsuario }, { estado: true });
};

