import { Request, Response } from "express";
import * as habitoService from "../services/habito.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Habito } from "../entities/habito";

// Insertar hábito
export const insertarHabito = async (req: Request, res: Response) => {
    try {
        const habito: Partial<Habito> = req.body;
        const nuevoHabito = await habitoService.insertarHabito(habito);
        res.json(BaseResponse.success(nuevoHabito.idHabito, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar todos los hábitos
export const listarHabitos = async (_req: Request, res: Response) => {
    try {
        const habitos = await habitoService.listarHabitos();
        res.json(BaseResponse.success(habitos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarHabitos:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar hábitos activos
export const listarHabitosActivos = async (_req: Request, res: Response) => {
    try {
        const habitos = await habitoService.listarHabitosActivos();
        res.json(BaseResponse.success(habitos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarHabitosActivos:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar hábitos por ID de usuario
export const listarHabitosPorUsuario = async (req: Request, res: Response) => {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        const habitos = await habitoService.listarHabitosPorUsuario(idUsuario);
        res.json(BaseResponse.success(habitos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarHabitosPorUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar hábito
export const actualizarHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        const data: Partial<Habito> = req.body;
        await habitoService.actualizarHabito(idHabito, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar hábito (soft delete)
export const eliminarHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        await habitoService.eliminarHabito(idHabito);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Activar hábito
export const activarHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        await habitoService.activarHabito(idHabito);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error activarHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
