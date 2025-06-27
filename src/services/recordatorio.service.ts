import { AppDataSource } from "../config/appdatasource";
import { Recordatorio } from "../entities/recordatorio";

// Insertar recordatorio
export const insertarRecordatorio = async (recordatorio: Partial<Recordatorio>): Promise<Recordatorio> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    return await repository.save(recordatorio);
};

// Listar todos los recordatorios activos
export const listarRecordatoriosActivos = async (): Promise<Recordatorio[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    return await repository.find({
        relations: ['habito'],
        where: { estado: true },
        order: { idRecordatorio: "DESC" }
    });
};

// Listar todos los recordatorios
export const listarRecordatorios = async (): Promise<Recordatorio[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    return await repository.find({
        relations: ['habito'],
        order: { idRecordatorio: "DESC" }
    });
};

// Listar recordatorios por hábito
export const listarRecordatoriosPorHabito = async (idHabito: number): Promise<Recordatorio[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    return await repository.find({
        where: { habito: { idHabito }, estado: true },
        relations: ['habito'],
        order: { idRecordatorio: "DESC" }
    });
};

// Actualizar recordatorio
export const actualizarRecordatorio = async (idRecordatorio: number, data: Partial<Recordatorio>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    await repository.update({ idRecordatorio }, data);
};

// Eliminar recordatorio
export const eliminarRecordatorio = async (idRecordatorio: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    await repository.update({ idRecordatorio }, { estado: false });
};

// Activar recordatorio
export const activarRecordatorio = async (idRecordatorio: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    await repository.update({ idRecordatorio }, { estado: true });
};