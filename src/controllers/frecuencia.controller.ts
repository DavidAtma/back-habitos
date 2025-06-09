import { Request, Response } from "express";
import { FrecuenciaHabito } from "../entities/frecuenciaHabito";
import * as frecuenciaService from "../services/frecuencia.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarFrecuencia = async(req:Request, res: Response) =>{

    try{
    const frecuencia : Partial<FrecuenciaHabito> = req.body;
    await frecuenciaService.insertarFrecuencia(frecuencia);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }



    
}

export const listarFrecuencia = async (req: Request, res: Response) => {
    try {
        const frecuencias = await frecuenciaService.listarFrecuencia();
        res.json(BaseResponse.success(frecuencias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarFrecuencia:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};