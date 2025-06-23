import { AppDataSource } from "../config/appdatasource";
import { Seguimiento } from "../entities/seguimiento";

// Insertar seguimiento
export const insertarSeguimiento = async (seguimiento: Partial<Seguimiento>): Promise<Seguimiento> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.save(seguimiento);
};

// Listar todos los seguimientos
export const listarSeguimientos = async (): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        relations: ['habito'],
        order: { idFrecuencia: "DESC" }
    });
};

// Listar seguimientos por hábito
export const listarSeguimientosPorHabito = async (idHabito: number): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        where: { habito: { idHabito } },
        relations: ['habito'],
        order: { fecha: "DESC" }
    });
};

// Actualizar seguimiento
export const actualizarSeguimiento = async (idFrecuencia: number, data: Partial<Seguimiento>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idFrecuencia }, data);
};

// Eliminar seguimiento
export const eliminarSeguimiento = async (idFrecuencia: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.delete({ idFrecuencia });
};
