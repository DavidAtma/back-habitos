import AppDataSource from "../config/appdatasource";
import { FraseMotivacional } from "../entities/fraseMotivacional";

export const insertarFrase = async (fraseMotivacional: Partial<FraseMotivacional>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.save(fraseMotivacional);

}

export const listarFrase = async (): Promise<FraseMotivacional | null> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    const frases = await repository.find(); 
    if (frases.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex]; 
};