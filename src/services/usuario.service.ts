import AppDataSource from "../config/appdatasource";
import { Usuario } from "../entities/usuario";


export const insertUsuario = async (usuario: Partial<Usuario>) => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }


const repository = AppDataSource.getRepository(Usuario);
    await repository.save(usuario);

}

export const listarUsuario = async (): Promise<Usuario[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.find({
        relations: ['rol'], 
    });
};