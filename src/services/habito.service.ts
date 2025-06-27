import { AppDataSource } from "../config/appdatasource";
import { Habito } from "../entities/habito";

// Insertar hábito y devolver el objeto con ID generado
export const insertarHabito = async (habito: Partial<Habito>): Promise<Habito> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    const nuevoHabito = await repository.save(habito);
    return nuevoHabito;
};

// Listar todos los hábitos activos
export const listarHabitosActivos = async (): Promise<Habito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    return await repository.find({
        relations: ['usuario', 'categoria'],
        where: { estado: true },
        order: { idHabito: "DESC" }
    });
};

// Listar todos los hábitos
export const listarHabitos = async (): Promise<Habito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    return await repository.find({
        relations: ['usuario', 'categoria'],
        order: { idHabito: "DESC" }
    });
};

// Listar hábitos por usuario
export const listarHabitosPorUsuario = async (idUsuario: number): Promise<Habito[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    return await repository.find({
        where: { usuario: { idUsuario }, estado: true },
        relations: ['usuario', 'categoria'],
        order: { idHabito: "DESC" }
    });
};

// Actualizar hábito
export const actualizarHabito = async (idHabito: number, data: Partial<Habito>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    await repository.update({ idHabito }, data);
};

// Eliminar hábito
export const eliminarHabito = async (idHabito: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
    
    const repository = AppDataSource.getRepository(Habito);
    await repository.update({ idHabito }, { estado: false });
};

// Activar hábito
export const activarHabito = async (idHabito: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);
    await repository.update({ idHabito }, { estado: true });
};