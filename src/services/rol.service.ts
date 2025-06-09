import AppDataSource from "../config/appdatasource";
import { Rol } from "../entities/rol";


export const insertarRol = async (rol: Partial<Rol>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Rol);
    await repository.save(rol);

}

export const listarRol = async (): Promise<Rol[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Rol);
    return await repository.find({
   
    });
};