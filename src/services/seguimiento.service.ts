import { AppDataSource } from "../config/appdatasource";
import { Seguimiento } from "../entities/seguimiento";
import { Between } from "typeorm"; // Importar Between

// Insertar seguimiento
export const insertarSeguimiento = async (seguimiento: Partial<Seguimiento>): Promise<Seguimiento> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.save(seguimiento);
};

// Listar todos los seguimientos activos
export const listarSeguimientosActivos = async (): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        relations: ['habito'],
        where: { estado: true },
        order: { idSeguimiento: "DESC" }
    });
};

// Listar todos los seguimientos
export const listarSeguimientos = async (): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        relations: ['habito'],
        order: { idSeguimiento: "DESC" }
    });
};

// Listar seguimientos por hábito
export const listarSeguimientosPorHabito = async (idHabito: number): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        where: { habito: { idHabito }, estado: true },
        relations: ['habito'],
        order: { fecha: "DESC" }
    });
};

// Listar seguimientos por usuario
export const listarSeguimientosPorUsuario = async (idUsuario: number): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        where: { habito: { usuario: { idUsuario }, estado: true } },
        relations: ['habito', 'habito.usuario'],
        order: { fecha: "DESC" }
    });
};

// Listar seguimientos por usuario y fecha
export const listarSeguimientosPorUsuarioYFecha = async (idUsuario: number, fecha: string): Promise<Seguimiento[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);

    const startOfDay = new Date(fecha);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(fecha);
    endOfDay.setHours(23, 59, 59, 999);

    return await repository.find({
        where: {
            habito: { usuario: { idUsuario }, estado: true },
            fecha: Between(startOfDay, endOfDay)
        },
        relations: ['habito', 'habito.usuario'],
        order: { fecha: "ASC" }
    });
};


// Actualizar seguimiento
export const actualizarSeguimiento = async (idSeguimiento: number, data: Partial<Seguimiento>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idSeguimiento: idSeguimiento }, data);
};

// Eliminar seguimiento
export const eliminarSeguimiento = async (idSeguimiento: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idSeguimiento }, { estado: false });
};

// Activar seguimiento
export const activarSeguimiento = async (idSeguimiento: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idSeguimiento }, { estado: true });
};