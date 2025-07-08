import { Request, Response } from "express";
import * as seguimientoService from "../services/seguimiento.service";
import { BaseResponse } from "../shared/base-response";
import { MensajeController } from "../shared/constants";
import { Seguimiento } from "../entities/seguimiento";
import { AppDataSource } from "../config/appdatasource";

// Insertar seguimiento
export const insertarSeguimiento = async (req: Request, res: Response): Promise<void> => {
    try {
        const { idHabito, idUsuario, fecha, notaDia } = req.body;

        if (!idHabito || !idUsuario || !fecha) {
            res.status(400).json(BaseResponse.error("Datos incompletos"));
            return;
        }

        const repository = AppDataSource.getRepository(Seguimiento);

        const seguimientoExistente = await repository.findOne({
            where: {
                habito: { idHabito },
                usuario: { idUsuario },
                fecha: new Date(fecha),
                estado: true
            },
            relations: ['habito', 'usuario']
        });

        if (seguimientoExistente) {
            res.status(409).json(BaseResponse.error("Ya completaste este hábito hoy."));
            return;
        }

        const nuevoSeguimiento = repository.create({
            habito: { idHabito },
            usuario: { idUsuario },
            fecha: new Date(fecha),
            completado: true,
            notaDia: notaDia || "Cumplido",
            estado: true
        });

        const savedSeguimiento = await repository.save(nuevoSeguimiento);

        res.json(BaseResponse.success(savedSeguimiento, MensajeController.INSERTADO_OK));
    } catch (error: any) {
        console.error("Error insertarSeguimiento:", error);
        res.status(500).json(BaseResponse.error("⚠️ Error al insertar seguimiento"));
    }
};

// Listar seguimientos activos
export const listarSeguimientosActivos = async (_req: Request, res: Response) => {
    try {
        const seguimientos = await seguimientoService.listarSeguimientosActivos();
        res.json(BaseResponse.success(seguimientos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarSeguimientosActivos:", error);
        res.status(500).json(BaseResponse.error("⚠️ No se pudo obtener los seguimientos activos"));
    }
};

// Listar todos los seguimientos
export const listarSeguimientos = async (_req: Request, res: Response) => {
    try {
        const seguimientos = await seguimientoService.listarSeguimientos();
        res.json(BaseResponse.success(seguimientos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarSeguimientos:", error);
        res.status(500).json(BaseResponse.error("⚠️ No se pudo obtener los seguimientos"));
    }
};

// Listar seguimientos por hábito
export const listarSeguimientosPorHabito = async (req: Request, res: Response) => {
    try {
        const idHabito = parseInt(req.params.idHabito);
        if (isNaN(idHabito)) {
            res.status(400).json(BaseResponse.error("ID de hábito inválido"));
            return;
        }

        const seguimientos = await seguimientoService.listarSeguimientosPorHabito(idHabito);
        res.json(BaseResponse.success(seguimientos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarSeguimientosPorHabito:", error);
        res.status(500).json(BaseResponse.error("⚠️ Error al listar seguimientos por hábito"));
    }
};

// Listar seguimientos por usuario y fecha
export const listarSeguimientosPorUsuarioYFecha = async (req: Request, res: Response) => {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        const fecha = req.params.fecha;

        //Verificación de parámetros
        console.log("Parámetros recibidos:", { idUsuario, fecha });

        if (isNaN(idUsuario) || !fecha) {
            res.status(400).json(BaseResponse.error("ID de usuario o fecha inválidos"));
            return;
        }

        // Llamada al servicio
        const seguimientos = await seguimientoService.listarSeguimientosPorUsuarioYFecha(idUsuario, fecha);

        //Verificar lo que devuelve la base de datos
        console.log("Seguimientos encontrados:", seguimientos);

        res.json(BaseResponse.success(seguimientos, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error listarSeguimientosPorUsuarioYFecha:", error);
        res.status(500).json(BaseResponse.error("⚠️ No se pudo obtener los seguimientos"));
    }
};


export const listarSeguimientosCompletadosPorUsuario = async (req: Request, res: Response) => {
    try {
        const idUsuario = parseInt(req.params.idUsuario);

        if (isNaN(idUsuario)) {
            res.status(400).json(BaseResponse.error("❗ ID de usuario inválido"));
            return;
        }

        const seguimientos = await seguimientoService.listarSeguimientosCompletadosPorUsuario(idUsuario);

        res.json(BaseResponse.success(seguimientos, "Seguimientos completados obtenidos correctamente"));
    } catch (error: any) {
        console.error("❌ Error listarSeguimientosCompletadosPorUsuario:", error);
        res.status(500).json(BaseResponse.error("⚠️ No se pudo obtener los seguimientos completados"));
    }
};


// Actualizar seguimiento
export const actualizarSeguimiento = async (req: Request, res: Response) => {
    try {
        const idSeguimiento = parseInt(req.params.idSeguimiento);
        const data: Partial<Seguimiento> = req.body;

        if (isNaN(idSeguimiento)) {
            res.status(400).json(BaseResponse.error("ID de seguimiento inválido"));
            return;
        }

        await seguimientoService.actualizarSeguimiento(idSeguimiento, data);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error actualizarSeguimiento:", error);
        res.status(500).json(BaseResponse.error("No se pudo actualizar el seguimiento"));
    }
};

// Eliminar seguimiento
export const eliminarSeguimiento = async (req: Request, res: Response) => {
    try {
        const idSeguimiento = parseInt(req.params.idSeguimiento);

        if (isNaN(idSeguimiento)) {
            res.status(400).json(BaseResponse.error("ID de seguimiento inválido"));
            return;
        }

        await seguimientoService.eliminarSeguimiento(idSeguimiento);
        res.json(BaseResponse.success(null, MensajeController.ELIMINADO_OK));
    } catch (error: any) {
        console.error("Error eliminarSeguimiento:", error);
        res.status(500).json(BaseResponse.error("No se pudo eliminar el seguimiento"));
    }
};

// Activar seguimiento
export const activarSeguimiento = async (req: Request, res: Response) => {
    try {
        const idSeguimiento = parseInt(req.params.idSeguimiento);

        if (isNaN(idSeguimiento)) {
            res.status(400).json(BaseResponse.error("ID de seguimiento inválido"));
            return;
        }

        await seguimientoService.activarSeguimiento(idSeguimiento);
        res.json(BaseResponse.success(null, MensajeController.ACTUALIZADO_OK));
    } catch (error: any) {
        console.error("Error activarSeguimiento:", error);
        res.status(500).json(BaseResponse.error("No se pudo activar el seguimiento"));
    }
};
