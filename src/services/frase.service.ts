import AppDataSource from "../config/appdatasource";
import { FraseMotivacional } from "../entities/fraseMotivacional";

export const insertarFrase = async (fraseMotivacional: Partial<FraseMotivacional>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.save(fraseMotivacional);

}

export const listarFrase = async (): Promise<FraseMotivacional[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    return await repository.find({
      
    });
};