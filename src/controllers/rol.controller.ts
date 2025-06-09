import { Request, Response } from "express";
import { Rol } from "../entities/rol";
import * as rolService from "../services/rol.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarRol = async(req:Request, res: Response) =>{

    try{
    const rol : Partial<Rol> = req.body;
    await rolService.insertarRol(rol);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }



    
}

export const listarRol = async (req: Request, res: Response) => {
    try {
        const roles = await rolService.listarRol();
        res.json(BaseResponse.success(roles, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarRol:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};