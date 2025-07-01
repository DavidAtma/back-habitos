import { AppDataSource } from "../config/appdatasource";
import { Rol } from "../entities/rol";
export const obtenerRolPorId = async (idRol: number) => {
  return await AppDataSource.getRepository(Rol).findOneBy({ idRol });
};
// Insertar rol
export const insertarRol = async (rol: Partial<Rol>): Promise<Rol> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    return await repository.save(rol);
};

// Listar todos los roles activos
export const listarRolesActivos = async (): Promise<Rol[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    return await repository.find({
        where: { estado: true },
        order: { idRol: "DESC" }
    });
};

// Listar todos los roles
export const listarRoles = async (): Promise<Rol[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    return await repository.find({
        order: { idRol: "DESC" }
    });
};

// Actualizar rol
export const actualizarRol = async (idRol: number, data: Partial<Rol>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    await repository.update({ idRol }, data);
};

// Eliminar rol
export const eliminarRol = async (idRol: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    await repository.update({ idRol }, { estado: false });
};

// Activar rol
export const activarRol = async (idRol: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    await repository.update({ idRol }, { estado: true });
};