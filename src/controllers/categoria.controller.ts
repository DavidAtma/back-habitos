import { Request, Response } from "express";
import { Categoria } from "../entities/categoria";
import * as categoriaService from "../services/categoria.service"
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";

export const insertarCategoria = async(req:Request, res: Response) =>{

    try{
    const categoria : Partial<Categoria> = req.body;
    await categoriaService.insertarCategoria(categoria);
    res.json(BaseResponse.success(null, MensajeController.INSERTADO_OK));

    }catch (error) {
        console.error(error);
        res.status(500).json(BaseResponse.error(error.message));
    }

}

export const listarCategoria = async (req: Request, res: Response) => {
    try {
        const categorias = await categoriaService.listarCategoria();
        res.json(BaseResponse.success(categorias, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarCategoria:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};