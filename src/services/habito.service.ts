import { AppDataSource } from "../config/appdatasource";
import { Habito } from "../entities/habito";

const repository = AppDataSource.getRepository(Habito);

export const insertarHabito = async(habito: Partial<Habito>) =>{
    await repository.save(habito);

}