import AppDataSource from "../config/appdatasource";
import { FrecuenciaHabito } from "../entities/frecuenciaHabito";

export const insertarFrecuencia = async (frecuenciaHabito: Partial<FrecuenciaHabito>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(FrecuenciaHabito);
    await repository.save(frecuenciaHabito);

}

export const listarFrecuencia = async (): Promise<FrecuenciaHabito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FrecuenciaHabito);
    return await repository.find({
        relations: ['habito'], 
    });
};