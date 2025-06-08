import { Request, Response } from "express";
import { Habito } from "../entities/habito";
import * as habitoService from "../services/habito.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
export const insertarHabito = async(req:Request, res: Response) =>{

    try{
    const habito : Partial<Habito> = req.body;
    await habitoService.insertarHabito(habito);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }



}

{
    
}