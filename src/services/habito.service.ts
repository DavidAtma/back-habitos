import { AppDataSource } from "../config/appdatasource";
import { Habito } from "../entities/habito";
import { Categoria } from "../entities/categoria";
import { Usuario } from "../entities/usuario"; 



// Insertar hábito y devolver el objeto con ID generado
export const insertarHabito = async (habito: Partial<Habito>): Promise<Habito> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Habito);


if (habito.categoria && habito.categoria.idCategoria) {
    habito.categoria = { idCategoria: habito.categoria.idCategoria } as Categoria;
}

    if (habito.usuario && habito.usuario.idUsuario) {
        habito.usuario = { idUsuario: habito.usuario.idUsuario } as Usuario;
    }

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
    const habito = await repository.findOne({ where: { idHabito } });

    if (!habito) {
        throw new Error('Hábito no encontrado');
    }

    //Mapear los campos que vienen del body:
    habito.nombre = data.nombre ?? habito.nombre;
    habito.descripcion = data.descripcion ?? habito.descripcion;
    habito.horaSugerida = data.horaSugerida ?? habito.horaSugerida;

    //AQUÍ: Mapear idCategoria correctamente:
    if (data.categoria && data.categoria.idCategoria) {
        habito.categoria = { idCategoria: data.categoria.idCategoria } as Categoria;
    }


    await repository.save(habito);
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