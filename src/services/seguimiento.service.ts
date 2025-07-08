import { AppDataSource } from "../config/appdatasource";
import { Seguimiento } from "../entities/seguimiento";
import { Between } from "typeorm";

const ensureDataSourceInitialized = async () => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }
};

export const insertarSeguimiento = async (seguimiento: Partial<Seguimiento>): Promise<Seguimiento> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.save(seguimiento);
};

export const listarSeguimientosActivos = async (): Promise<Seguimiento[]> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        relations: ['habito', 'usuario'],
        where: { estado: true },
        order: { idSeguimiento: "DESC" }
    });
};

export const listarSeguimientos = async (): Promise<Seguimiento[]> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        relations: ['habito', 'usuario'],
        order: { idSeguimiento: "DESC" }
    });
};

export const listarSeguimientosPorHabito = async (idHabito: number): Promise<Seguimiento[]> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    return await repository.find({
        where: { habito: { idHabito }, estado: true },
        relations: ['habito', 'usuario'],
        order: { fecha: "DESC" }
    });
};

export const listarSeguimientosPorUsuarioYFecha = async (idUsuario: number, fecha: string): Promise<Seguimiento[]> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);

    try {
        const seguimientos = await repository
            .createQueryBuilder("seguimiento")
            .leftJoinAndSelect("seguimiento.habito", "habito")
            .leftJoinAndSelect("seguimiento.usuario", "usuario")
            .where("seguimiento.usuario.idUsuario = :idUsuario", { idUsuario })
            .andWhere("CAST(seguimiento.fecha AS DATE) = :fecha", { fecha })  // 👍 aquí puedes probar también DATE() o CONVERT() según tu motor
            .andWhere("seguimiento.estado_auditoria = :estado", { estado: 1 })   // ✅ ¡este era el error!
            .orderBy("seguimiento.fecha", "ASC")
            .getMany();

        return seguimientos;

    } catch (error) {
        console.error("Error al listar seguimientos por usuario y fecha:", error);
        return [];
    }
};

export const listarSeguimientosCompletadosPorUsuario = async (idUsuario: number) => {
    const repository = AppDataSource.getRepository(Seguimiento);

    const seguimientos = await repository.find({
        where: {
            usuario: { idUsuario },
            completado: true,
            estado: true
        },
        relations: ["habito"]
    });

    return seguimientos;
};

export const actualizarSeguimiento = async (idSeguimiento: number, data: Partial<Seguimiento>): Promise<void> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idSeguimiento }, data);
};

export const eliminarSeguimiento = async (idSeguimiento: number): Promise<void> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idSeguimiento }, { estado: false });
};

export const activarSeguimiento = async (idSeguimiento: number): Promise<void> => {
    await ensureDataSourceInitialized();
    const repository = AppDataSource.getRepository(Seguimiento);
    await repository.update({ idSeguimiento }, { estado: true });
};
