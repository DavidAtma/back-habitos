import { Request, Response } from "express";
import * as usuarioService from "../services/usuario.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Usuario } from "../entities/usuario";

// Insertar usuario
export const insertarUsuario = async (req: Request, res: Response) => {
    try {
        const usuario: Partial<Usuario> = req.body;
        const nuevoUsuario = await usuarioService.insertarUsuario(usuario);
        res.json(BaseResponse.success(nuevoUsuario.idUsuario, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Listar usuarios
export const listarUsuarios = async (_req: Request, res: Response) => {
    try {
        const usuarios = await usuarioService.listarUsuarios();
        res.json(BaseResponse.success(usuarios, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarUsuarios:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// Buscar por correo
export const buscarPorCorreo = async (req: Request, res: Response) => {
    try {
        const { correo } = req.params;
        const usuario = await usuarioService.buscarUsuarioPorCorreo(correo);
        if (!usuario) {
            return res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
        }
        res.json(BaseResponse.success(usuario, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error buscarPorCorreo:", error);
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

// Eliminar usuario
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

// Login de usuario
export const loginUsuario = async (req: Request, res: Response) => {
    try {
        const { correo, contrasena } = req.body;

        const usuario = await usuarioService.loginUsuario(correo, contrasena);

        if (!usuario) {
            return res.status(401).json(BaseResponse.error("Credenciales inválidas", 401));
        }

        res.json(BaseResponse.success(usuario, "Login exitoso"));
    } catch (error: any) {
        console.error("Error loginUsuario:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

