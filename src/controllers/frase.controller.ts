import { Request, Response } from "express";
import { FraseMotivacional } from "../entities/fraseMotivacional";
import * as fraseService from "../services/frase.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";


export const insertarFrase = async(req:Request, res: Response) =>{
    try{
        const frase : Partial<FraseMotivacional> = req.body;
        await fraseService.insertarFrase(frase);
        res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));
    }catch(error){
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}


export const listarFrase = async (req: Request, res: Response): Promise<void> => {
  try {
    const frase = await fraseService.listarFrase();
    res.status(200).json(frase);
  } catch (error: unknown) {
    console.error("Error listarFrase:", error);
    
    
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
        stack: error.stack,         
        name: error.name,
      });
    } else {
      
      res.status(500).json({ message: "Error inesperado al listar frase", error });
    }
  }
};