import { AppDataSource } from "../config/appdatasource";
import { Categoria } from "../entities/categoria";

// Insertar categoría
export const insertarCategoria = async (categoria: Partial<Categoria>): Promise<Categoria> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Categoria);
    return await repository.save(categoria);
};

// Listar todas las categorías
export const listarCategorias = async (): Promise<Categoria[]> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Categoria);
    return await repository.find({
        order: { idCategoria: "DESC" }
    });
};

// Actualizar categoría
export const actualizarCategoria = async (idCategoria: number, data: Partial<Categoria>): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Categoria);
    await repository.update({ idCategoria }, data);
};

// Eliminar categoría
export const eliminarCategoria = async (idCategoria: number): Promise<void> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Categoria);
    await repository.delete({ idCategoria });
};
