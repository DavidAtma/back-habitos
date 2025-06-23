import { Request, Response } from "express";
import * as frecuenciaService from "../services/frecuenciaHabito.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { FrecuenciaHabito } from "../entities/frecuenciaHabito";

// Insertar frecuencia
export const insertarFrecuencia = async (req: Request, res: Response) => {
    try {
        const frecuencia: Partial<FrecuenciaHabito> = req.body;
        const nuevaFrecuencia = await frecuenciaService.insertarFrecuencia(frecuencia);
        res.json(BaseResponse.success(nuevaFrecuencia.idFrecuencia, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarFrecuencia:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar todas las frecuencias
export const listarFrecuencias = async (_req: Request, res: Response) => {
    try {
        const frecuencias = await frecuenciaService.listarFrecuencias();
        res.json(BaseResponse.success(frecuencias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarFrecuencias:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar por hábito
export const listarFrecuenciasPorHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        const frecuencias = await frecuenciaService.listarFrecuenciasPorHabito(idHabito);
        res.json(BaseResponse.success(frecuencias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarFrecuenciasPorHabito:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar frecuencia
export const actualizarFrecuencia = async (req: Request, res: Response) => {
    try {
        const idFrecuencia = parseInt(req.params.idFrecuencia);
        const data: Partial<FrecuenciaHabito> = req.body;
        await frecuenciaService.actualizarFrecuencia(idFrecuencia, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarFrecuencia:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar frecuencia
export const eliminarFrecuencia = async (req: Request, res: Response) => {
    try {
        const idFrecuencia = parseInt(req.params.idFrecuencia);
        await frecuenciaService.eliminarFrecuencia(idFrecuencia);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarFrecuencia:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
