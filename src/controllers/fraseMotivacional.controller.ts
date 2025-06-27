import { Request, Response } from "express";
import * as fraseService from "../services/fraseMotivacional.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { FraseMotivacional } from "../entities/fraseMotivacional";

// Insertar frase
export const insertarFrase = async (req: Request, res: Response) => {
    try {
        const frase: Partial<FraseMotivacional> = req.body;
        const nuevaFrase = await fraseService.insertarFrase(frase);
        res.json(BaseResponse.success(nuevaFrase.idFrase, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarFrase:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar todas las frases
export const listarFrases = async (_req: Request, res: Response) => {
    try {
        const frases = await fraseService.listarFrases();
        res.json(BaseResponse.success(frases, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarFrases:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar solo frases activas
export const listarFrasesActivas = async (_req: Request, res: Response) => {
    try {
        const frases = await fraseService.listarFrasesActivas();
        res.json(BaseResponse.success(frases, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarFrasesActivas:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar frase
export const actualizarFrase = async (req: Request, res: Response) => {
    try {
        const idFrase = parseInt(req.params.idFrase);
        const data: Partial<FraseMotivacional> = req.body;
        await fraseService.actualizarFrase(idFrase, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarFrase:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar frase (desactivar)
export const eliminarFrase = async (req: Request, res: Response) => {
    try {
        const idFrase = parseInt(req.params.idFrase);
        await fraseService.eliminarFrase(idFrase);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarFrase:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Activar frase
export const activarFrase = async (req: Request, res: Response) => {
    try {
        const idFrase = parseInt(req.params.idFrase);
        await fraseService.activarFrase(idFrase);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error activarFrase:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
