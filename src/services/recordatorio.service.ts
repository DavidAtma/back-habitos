

import AppDataSource from "../config/appdatasource";
import { Recordatorio } from "../entities/recordatorio";

export const insertarRecordatorio = async (recordatorio: Partial<Recordatorio>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Recordatorio);
    await repository.save(recordatorio);

}

export const listarRecordatorio = async (): Promise<Recordatorio[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Recordatorio);
    return await repository.find({
        relations: ['habito'], 
    });
};