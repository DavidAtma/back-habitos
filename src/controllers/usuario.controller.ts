import { Request, Response } from "express";
import { Usuario } from "../entities/usuario";
import * as usuarioService from "../services/usuario.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarUsuario = async(req:Request, res: Response) =>{

    try{
    const usuario : Partial<Usuario> = req.body;
    await usuarioService.insertarUsuario(usuario);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }



    
}

export const listarUsuario = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.listarUsuario();
        res.json(BaseResponse.success(usuarios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};