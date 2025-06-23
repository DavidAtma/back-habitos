import { AppDataSource } from "../config/appdatasource";
import { FraseMotivacional } from "../entities/fraseMotivacional";

// Insertar frase
export const insertarFrase = async (frase: Partial<FraseMotivacional>): Promise<FraseMotivacional> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    return await repository.save(frase);
};

// Listar todas las frases
export const listarFrases = async (): Promise<FraseMotivacional[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    return await repository.find({
        order: { id_frase: "DESC" }
    });
};

// Actualizar frase
export const actualizarFrase = async (idFrase: number, data: Partial<FraseMotivacional>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.update({ id_frase: idFrase }, data);
};

// Eliminar frase
export const eliminarFrase = async (idFrase: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.delete({ id_frase: idFrase });
};
