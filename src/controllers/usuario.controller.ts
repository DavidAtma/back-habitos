import { Request, Response } from "express";
import * as usuarioService from "../services/usuario.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Usuario } from "../entities/usuario";
import AppDataSource from "../config/appdatasource";

// Insertar usuario
export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        const usuario: Partial<Usuario> = req.body;
        const nuevoUsuario = await usuarioService.insertarUsuario(usuario);
        res.json(BaseResponse.success(nuevoUsuario.idUsuario, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarUsuario:", error);
        if (error.message.includes("correo ya está registrado")) {
      return res.status(409).json(
        BaseResponse.error("El correo ya está registrado", 409)
      );
      }
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar todos los usuarios
export const listarUsuarios = async (_req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.listarUsuarios();
        res.json(BaseResponse.success(usuarios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarUsuarios:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar usuarios activos
export const listarUsuariosActivos = async (_req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.listarUsuariosActivos();
        res.json(BaseResponse.success(usuarios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarUsuariosActivos:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Actualizar usuario
export const actualizarUsuario = async (req: Request, res: Response) => {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        const data: Partial<Usuario> = req.body;
        await usuarioService.actualizarUsuario(idUsuario, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Eliminar usuario (soft delete)
export const eliminarUsuario = async (req: Request, res: Response) => {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        await usuarioService.eliminarUsuario(idUsuario);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Activar usuario
export const activarUsuario = async (req: Request, res: Response) => {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        await usuarioService.activarUsuario(idUsuario);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error activarUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

