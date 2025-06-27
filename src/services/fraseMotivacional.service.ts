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

// Listar todas las frases activas
export const listarFrasesActivas = async (): Promise<FraseMotivacional[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    return await repository.find({
        where: { estado: true },
        order: { idFrase: "DESC" }
    });
};

// Listar todas las frases
export const listarFrases = async (): Promise<FraseMotivacional[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    return await repository.find({
        order: { idFrase: "DESC" }
    });
};

// Actualizar frase
export const actualizarFrase = async (idFrase: number, data: Partial<FraseMotivacional>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.update({ idFrase: idFrase }, data);
};

// Eliminar frase
export const eliminarFrase = async (idFrase: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.update({ idFrase }, { estado: false });
};

// Activar frase
export const activarFrase = async (idFrase: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(FraseMotivacional);
    await repository.update({ idFrase }, { estado: true });
};