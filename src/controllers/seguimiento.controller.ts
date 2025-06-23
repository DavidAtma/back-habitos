import { Request, Response } from "express";
import * as seguimientoService from "../services/seguimiento.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Seguimiento } from "../entities/seguimiento";

// Insertar seguimiento
export const insertarSeguimiento = async (req: Request, res: Response) => {
    try {
        const seguimiento: Partial<Seguimiento> = req.body;
        const nuevoSeguimiento = await seguimientoService.insertarSeguimiento(seguimiento);
        res.json(BaseResponse.success(nuevoSeguimiento.idFrecuencia, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarSeguimiento:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar seguimientos
export const listarSeguimientos = async (_req: Request, res: Response) => {
    try {
        const seguimientos = await seguimientoService.listarSeguimientos();
        res.json(BaseResponse.success(seguimientos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarSeguimientos:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar seguimientos por hábito
export const listarSeguimientosPorHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        const seguimientos = await seguimientoService.listarSeguimientosPorHabito(idHabito);
        res.json(BaseResponse.success(seguimientos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarSeguimientosPorHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar seguimiento
export const actualizarSeguimiento = async (req: Request, res: Response) => {
    try {
        const idFrecuencia = parseInt(req.params.idFrecuencia);
        const data: Partial<Seguimiento> = req.body;
        await seguimientoService.actualizarSeguimiento(idFrecuencia, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarSeguimiento:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar seguimiento
export const eliminarSeguimiento = async (req: Request, res: Response) => {
    try {
        const idFrecuencia = parseInt(req.params.idFrecuencia);
        await seguimientoService.eliminarSeguimiento(idFrecuencia);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarSeguimiento:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
