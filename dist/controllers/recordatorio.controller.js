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
exports.activarRecordatorio = exports.eliminarRecordatorio = exports.actualizarRecordatorio = exports.listarRecordatoriosPorHabito = exports.listarRecordatoriosActivos = exports.listarRecordatorios = exports.insertarRecordatorio = void 0;
const recordatorioService = __importStar(require("../services/recordatorio.service"));
const base_response_1 = require("../shared/base-response");
const constants_1 = require("../shared/constants");
// Insertar recordatorio
const insertarRecordatorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recordatorio = req.body;
        const nuevoRecordatorio = yield recordatorioService.insertarRecordatorio(recordatorio);
        res.json(base_response_1.BaseResponse.success(nuevoRecordatorio.idRecordatorio, constants_1.MensajeController.INSERTADO_OK));
    }
    catch (error) {
        console.error("Error insertarRecordatorio:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarRecordatorio = insertarRecordatorio;
// Listar todos los recordatorios
const listarRecordatorios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recordatorios = yield recordatorioService.listarRecordatorios();
        res.json(base_response_1.BaseResponse.success(recordatorios, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarRecordatorios:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarRecordatorios = listarRecordatorios;
// Listar recordatorios activos
const listarRecordatoriosActivos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recordatorios = yield recordatorioService.listarRecordatoriosActivos();
        res.json(base_response_1.BaseResponse.success(recordatorios, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarRecordatoriosActivos:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarRecordatoriosActivos = listarRecordatoriosActivos;
// Listar recordatorios por hábito
const listarRecordatoriosPorHabito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idHabito = parseInt(req.params.idHabito);
        const recordatorios = yield recordatorioService.listarRecordatoriosPorHabito(idHabito);
        res.json(base_response_1.BaseResponse.success(recordatorios, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarRecordatoriosPorHabito:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarRecordatoriosPorHabito = listarRecordatoriosPorHabito;
// Actualizar recordatorio
const actualizarRecordatorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRecordatorio = parseInt(req.params.idRecordatorio);
        const data = req.body;
        yield recordatorioService.actualizarRecordatorio(idRecordatorio, data);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error actualizarRecordatorio:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.actualizarRecordatorio = actualizarRecordatorio;
// Eliminar recordatorio (soft delete)
const eliminarRecordatorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRecordatorio = parseInt(req.params.idRecordatorio);
        yield recordatorioService.eliminarRecordatorio(idRecordatorio);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ELIMINADO_OK));
    }
    catch (error) {
        console.error("Error eliminarRecordatorio:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.eliminarRecordatorio = eliminarRecordatorio;
// Activar recordatorio
const activarRecordatorio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRecordatorio = parseInt(req.params.idRecordatorio);
        yield recordatorioService.activarRecordatorio(idRecordatorio);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error activarRecordatorio:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.activarRecordatorio = activarRecordatorio;
//# sourceMappingURL=recordatorio.controller.js.map