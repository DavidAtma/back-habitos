import { Request, Response } from "express";
import * as categoriaService from "../services/categoria.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Categoria } from "../entities/categoria";

// Insertar categoría
export const insertarCategoria = async (req: Request, res: Response) => {
    try {
        const categoria: Partial<Categoria> = req.body;
        const nuevaCategoria = await categoriaService.insertarCategoria(categoria);
        res.json(BaseResponse.success(nuevaCategoria.idCategoria, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarCategoria:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar todas las categorías
export const listarCategorias = async (_req: Request, res: Response) => {
    try {
        const categorias = await categoriaService.listarCategorias();
        res.status(200).json(BaseResponse.success(categorias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarCategorias:", error.message);
        res.status(500).json(BaseResponse.error("Error al listar categorías"));
    }
};

// Listar categorías activas
export const listarCategoriasActivas = async (_req: Request, res: Response) => {
    try {
        const categorias = await categoriaService.listarCategoriasActivas();
        res.status(200).json(BaseResponse.success(categorias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarCategoriasActivas:", error.message);
        res.status(500).json(BaseResponse.error("Error al listar categorías activas"));
    }
};

// Actualizar categoría
export const actualizarCategoria = async (req: Request, res: Response) => {
    try {
        const idCategoria = parseInt(req.params.idCategoria);
        const data: Partial<Categoria> = req.body;
        await categoriaService.actualizarCategoria(idCategoria, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarCategoria:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar (desactivar) categoría
export const eliminarCategoria = async (req: Request, res: Response) => {
    try {
        const idCategoria = parseInt(req.params.idCategoria);
        await categoriaService.eliminarCategoria(idCategoria);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarCategoria:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Activar categoría
export const activarCategoria = async (req: Request, res: Response) => {
    try {
        const idCategoria = parseInt(req.params.idCategoria);
        await categoriaService.activarCategoria(idCategoria);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error activarCategoria:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
