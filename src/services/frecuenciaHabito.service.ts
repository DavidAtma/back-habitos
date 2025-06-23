import { AppDataSource } from "../config/appdatasource";
import { FrecuenciaHabito } from "../entities/frecuenciaHabito";

// Insertar frecuencia
export const insertarFrecuencia = async (frecuencia: Partial<FrecuenciaHabito>): Promise<FrecuenciaHabito> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FrecuenciaHabito);
    return await repository.save(frecuencia);
};

// Listar todas las frecuencias
export const listarFrecuencias = async (): Promise<FrecuenciaHabito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FrecuenciaHabito);
    return await repository.find({
        relations: ['habito'],
        order: { idFrecuencia: "DESC" }
    });
};

// Listar frecuencias por ID de hábito
export const listarFrecuenciasPorHabito = async (idHabito: number): Promise<FrecuenciaHabito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FrecuenciaHabito);
    return await repository.find({
        where: { habito: { idHabito } },
        relations: ['habito'],
        order: { idFrecuencia: "DESC" }
    });
};

// Actualizar frecuencia
export const actualizarFrecuencia = async (idFrecuencia: number, data: Partial<FrecuenciaHabito>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FrecuenciaHabito);
    await repository.update({ idFrecuencia }, data);
};

// Eliminar frecuencia
export const eliminarFrecuencia = async (idFrecuencia: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FrecuenciaHabito);
    await repository.delete({ idFrecuencia });
};
