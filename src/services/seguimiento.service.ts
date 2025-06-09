import AppDataSource from "../config/appdatasource";
import { Seguimiento } from "../entities/seguimiento";

export const insertarSeguimiento = async (seguimiento: Partial<Seguimiento>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Seguimiento);
    await repository.save(seguimiento);

}

export const listarSeguimientos = async (): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
      
    });
};