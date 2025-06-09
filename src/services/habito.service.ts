import { AppDataSource } from "../config/appdatasource";
import { Habito } from "../entities/habito";

export const insertarHabito = async (habito: Partial<Habito>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Habito);
    await repository.save(habito);

}

export const listarHabitos = async (): Promise<Habito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    return await repository.find({
        relations: ['usuario', 'categoria'], 
    });
};