import {AppDataSource} from "../config/appdatasource";
import { Categoria } from "../entities/categoria";


export const insertarCategoria = async (categoria: Partial<Categoria>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Categoria);
    await repository.save(categoria);

}

export const listarCategoria = async (): Promise<Categoria[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Categoria);
    return await repository.find({
   
    });
};