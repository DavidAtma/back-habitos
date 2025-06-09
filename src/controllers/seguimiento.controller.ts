import { Request, Response } from "express";
import { Seguimiento } from "../entities/seguimiento";
import * as seguimientoService from "../services/seguimiento.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";



export const insertarSeguimiento = async(req:Request, res: Response) =>{

    try{
    const rol : Partial<Seguimiento> = req.body;
    await seguimientoService.insertarSeguimiento(rol);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }



    
}
    


export const listarSeguimientos = async (req: Request, res: Response) => {
    try {
        const frecuencias = await seguimientoService.listarSeguimientos();
        res.json(BaseResponse.success(frecuencias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarFrecuencia:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};