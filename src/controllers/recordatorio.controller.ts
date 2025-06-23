import { Recordatorio } from "../entities/recordatorio";
import { Request, Response } from "express";
import * as recordatorioService from "../services/recordatorio.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarRecordatorio = async(req:Request, res: Response) =>{

    try{
    const recordatorio : Partial<Recordatorio> = req.body;
    await recordatorioService.insertarRecordatorio(recordatorio);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }

}

export const listarRecordatorio = async (req: Request, res: Response) => {
    try {
        const recordatorios = await recordatorioService.listarRecordatorio();
        res.json(BaseResponse.success(recordatorios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarRecordatorio:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};