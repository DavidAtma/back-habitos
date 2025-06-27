import { Request, Response } from "express";
import * as rolService from "../services/rol.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Rol } from "../entities/rol";

// Insertar rol
export const insertarRol = async (req: Request, res: Response) => {
    try {
        const rol: Partial<Rol> = req.body;
        const nuevoRol = await rolService.insertarRol(rol);
        res.json(BaseResponse.success(nuevoRol.idRol, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarRol:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar todos los roles
export const listarRoles = async (_req: Request, res: Response) => {
    try {
        const roles = await rolService.listarRoles();
        res.json(BaseResponse.success(roles, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarRoles:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar roles activos
export const listarRolesActivos = async (_req: Request, res: Response) => {
    try {
        const roles = await rolService.listarRolesActivos();
        res.json(BaseResponse.success(roles, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarRolesActivos:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar rol
export const actualizarRol = async (req: Request, res: Response) => {
    try {
        const idRol = parseInt(req.params.idRol);
        const data: Partial<Rol> = req.body;
        await rolService.actualizarRol(idRol, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarRol:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar rol (soft delete)
export const eliminarRol = async (req: Request, res: Response) => {
    try {
        const idRol = parseInt(req.params.idRol);
        await rolService.eliminarRol(idRol);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarRol:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Activar rol
export const activarRol = async (req: Request, res: Response) => {
    try {
        const idRol = parseInt(req.params.idRol);
        await rolService.activarRol(idRol);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error activarRol:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
