import { Request, Response } from "express";
import { Habito } from "../entities/habito";
import * as habitoService from "../services/habito.service"
export const insertarHabito = async(req:Request, res: Response) =>{

    try{
    const habito : Partial<Habito> = req.body;
    await habitoService.insertarHabito(habito);
    }catch (error) {
        res.status(500).json({message: "Error al insertar"});
    }



}