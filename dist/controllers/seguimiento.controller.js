"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activarSeguimiento = exports.eliminarSeguimiento = exports.actualizarSeguimiento = exports.listarSeguimientosCompletadosPorUsuario = exports.listarSeguimientosPorUsuarioYFecha = exports.listarSeguimientosPorHabito = exports.listarSeguimientos = exports.listarSeguimientosActivos = exports.insertarSeguimiento = void 0;
const seguimientoService = __importStar(require("../services/seguimiento.service"));
const base_response_1 = require("../shared/base-response");
const constants_1 = require("../shared/constants");
const seguimiento_1 = require("../entities/seguimiento");
const appdatasource_1 = require("../config/appdatasource");
// Insertar seguimiento
const insertarSeguimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idHabito, idUsuario, fecha, notaDia } = req.body;
        if (!idHabito || !idUsuario || !fecha) {
            res.status(400).json(base_response_1.BaseResponse.error("Datos incompletos"));
            return;
        }
        const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
        const seguimientoExistente = yield repository.findOne({
            where: {
                habito: { idHabito },
                usuario: { idUsuario },
                fecha: new Date(fecha),
                estado: true
            },
            relations: ['habito', 'usuario']
        });
        if (seguimientoExistente) {
            res.status(409).json(base_response_1.BaseResponse.error("Ya completaste este hábito hoy."));
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
        const savedSeguimiento = yield repository.save(nuevoSeguimiento);
        res.json(base_response_1.BaseResponse.success(savedSeguimiento, constants_1.MensajeController.INSERTADO_OK));
    }
    catch (error) {
        console.error("Error insertarSeguimiento:", error);
        res.status(500).json(base_response_1.BaseResponse.error("⚠️ Error al insertar seguimiento"));
    }
});
exports.insertarSeguimiento = insertarSeguimiento;
// Listar seguimientos activos
const listarSeguimientosActivos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seguimientos = yield seguimientoService.listarSeguimientosActivos();
        res.json(base_response_1.BaseResponse.success(seguimientos, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarSeguimientosActivos:", error);
        res.status(500).json(base_response_1.BaseResponse.error("⚠️ No se pudo obtener los seguimientos activos"));
    }
});
exports.listarSeguimientosActivos = listarSeguimientosActivos;
// Listar todos los seguimientos
const listarSeguimientos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seguimientos = yield seguimientoService.listarSeguimientos();
        res.json(base_response_1.BaseResponse.success(seguimientos, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarSeguimientos:", error);
        res.status(500).json(base_response_1.BaseResponse.error("⚠️ No se pudo obtener los seguimientos"));
    }
});
exports.listarSeguimientos = listarSeguimientos;
// Listar seguimientos por hábito
const listarSeguimientosPorHabito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idHabito = parseInt(req.params.idHabito);
        if (isNaN(idHabito)) {
            res.status(400).json(base_response_1.BaseResponse.error("ID de hábito inválido"));
            return;
        }
        const seguimientos = yield seguimientoService.listarSeguimientosPorHabito(idHabito);
        res.json(base_response_1.BaseResponse.success(seguimientos, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarSeguimientosPorHabito:", error);
        res.status(500).json(base_response_1.BaseResponse.error("⚠️ Error al listar seguimientos por hábito"));
    }
});
exports.listarSeguimientosPorHabito = listarSeguimientosPorHabito;
// Listar seguimientos por usuario y fecha
const listarSeguimientosPorUsuarioYFecha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        const fecha = req.params.fecha;
        //Verificación de parámetros
        console.log("Parámetros recibidos:", { idUsuario, fecha });
        if (isNaN(idUsuario) || !fecha) {
            res.status(400).json(base_response_1.BaseResponse.error("ID de usuario o fecha inválidos"));
            return;
        }
        // Llamada al servicio
        const seguimientos = yield seguimientoService.listarSeguimientosPorUsuarioYFecha(idUsuario, fecha);
        //Verificar lo que devuelve la base de datos
        console.log("Seguimientos encontrados:", seguimientos);
        res.json(base_response_1.BaseResponse.success(seguimientos, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarSeguimientosPorUsuarioYFecha:", error);
        res.status(500).json(base_response_1.BaseResponse.error("⚠️ No se pudo obtener los seguimientos"));
    }
});
exports.listarSeguimientosPorUsuarioYFecha = listarSeguimientosPorUsuarioYFecha;
const listarSeguimientosCompletadosPorUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        if (isNaN(idUsuario)) {
            res.status(400).json(base_response_1.BaseResponse.error("❗ ID de usuario inválido"));
            return;
        }
        const seguimientos = yield seguimientoService.listarSeguimientosCompletadosPorUsuario(idUsuario);
        res.json(base_response_1.BaseResponse.success(seguimientos, "Seguimientos completados obtenidos correctamente"));
    }
    catch (error) {
        console.error("❌ Error listarSeguimientosCompletadosPorUsuario:", error);
        res.status(500).json(base_response_1.BaseResponse.error("⚠️ No se pudo obtener los seguimientos completados"));
    }
});
exports.listarSeguimientosCompletadosPorUsuario = listarSeguimientosCompletadosPorUsuario;
// Actualizar seguimiento
const actualizarSeguimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idSeguimiento = parseInt(req.params.idSeguimiento);
        const data = req.body;
        if (isNaN(idSeguimiento)) {
            res.status(400).json(base_response_1.BaseResponse.error("ID de seguimiento inválido"));
            return;
        }
        yield seguimientoService.actualizarSeguimiento(idSeguimiento, data);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error actualizarSeguimiento:", error);
        res.status(500).json(base_response_1.BaseResponse.error("No se pudo actualizar el seguimiento"));
    }
});
exports.actualizarSeguimiento = actualizarSeguimiento;
// Eliminar seguimiento
const eliminarSeguimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idSeguimiento = parseInt(req.params.idSeguimiento);
        if (isNaN(idSeguimiento)) {
            res.status(400).json(base_response_1.BaseResponse.error("ID de seguimiento inválido"));
            return;
        }
        yield seguimientoService.eliminarSeguimiento(idSeguimiento);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ELIMINADO_OK));
    }
    catch (error) {
        console.error("Error eliminarSeguimiento:", error);
        res.status(500).json(base_response_1.BaseResponse.error("No se pudo eliminar el seguimiento"));
    }
});
exports.eliminarSeguimiento = eliminarSeguimiento;
// Activar seguimiento
const activarSeguimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idSeguimiento = parseInt(req.params.idSeguimiento);
        if (isNaN(idSeguimiento)) {
            res.status(400).json(base_response_1.BaseResponse.error("ID de seguimiento inválido"));
            return;
        }
        yield seguimientoService.activarSeguimiento(idSeguimiento);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error activarSeguimiento:", error);
        res.status(500).json(base_response_1.BaseResponse.error("No se pudo activar el seguimiento"));
    }
});
exports.activarSeguimiento = activarSeguimiento;
//# sourceMappingURL=seguimiento.controller.js.map