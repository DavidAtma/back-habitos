import { Request, Response } from "express";
import * as recordatorioService from "../services/recordatorio.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Recordatorio } from "../entities/recordatorio";

// Insertar recordatorio
export const insertarRecordatorio = async (req: Request, res: Response) => {
    try {
        const recordatorio: Partial<Recordatorio> = req.body;
        const nuevoRecordatorio = await recordatorioService.insertarRecordatorio(recordatorio);
        res.json(BaseResponse.success(nuevoRecordatorio.idRecordatorio, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarRecordatorio:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar recordatorios
export const listarRecordatorios = async (_req: Request, res: Response) => {
    try {
        const recordatorios = await recordatorioService.listarRecordatorios();
        res.json(BaseResponse.success(recordatorios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarRecordatorios:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar recordatorios por hábito
export const listarRecordatoriosPorHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        const recordatorios = await recordatorioService.listarRecordatoriosPorHabito(idHabito);
        res.json(BaseResponse.success(recordatorios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarRecordatoriosPorHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar recordatorio
export const actualizarRecordatorio = async (req: Request, res: Response) => {
    try {
        const idRecordatorio = parseInt(req.params.idRecordatorio);
        const data: Partial<Recordatorio> = req.body;
        await recordatorioService.actualizarRecordatorio(idRecordatorio, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarRecordatorio:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar recordatorio
export const eliminarRecordatorio = async (req: Request, res: Response) => {
    try {
        const idRecordatorio = parseInt(req.params.idRecordatorio);
        await recordatorioService.eliminarRecordatorio(idRecordatorio);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarRecordatorio:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
