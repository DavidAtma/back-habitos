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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerUsuarioPorId = exports.activarUsuario = exports.eliminarUsuario = exports.actualizarUsuario = exports.listarUsuariosActivos = exports.listarUsuarios = exports.insertarUsuario = void 0;
const usuarioService = __importStar(require("../services/usuario.service"));
const base_response_1 = require("../shared/base-response");
const constants_1 = require("../shared/constants");
const usuario_1 = require("../entities/usuario");
const appdatasource_1 = __importDefault(require("../config/appdatasource"));
// Insertar usuario
const insertarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuario = req.body;
        const nuevoUsuario = yield usuarioService.insertarUsuario(usuario);
        res.json(base_response_1.BaseResponse.success(nuevoUsuario.idUsuario, constants_1.MensajeController.INSERTADO_OK));
    }
    catch (error) {
        console.error("Error insertarUsuario:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarUsuario = insertarUsuario;
// Listar todos los usuarios
const listarUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuarioService.listarUsuarios();
        res.json(base_response_1.BaseResponse.success(usuarios, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarUsuarios:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarUsuarios = listarUsuarios;
// Listar usuarios activos
const listarUsuariosActivos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuarioService.listarUsuariosActivos();
        res.json(base_response_1.BaseResponse.success(usuarios, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarUsuariosActivos:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarUsuariosActivos = listarUsuariosActivos;
// Buscar usuario por correo
/*export const buscarPorCorreo = async (req: Request, res: Response) => {
    try {
        const correo = req.query.correo as string;
        if (!correo) {
            return res.status(400).json(BaseResponse.error("Correo no proporcionado", 400));
        }

        const usuario = await usuarioService.buscarUsuarioPorCorreo(correo);
        if (!usuario) {
            return res.status(404).json(BaseResponse.error(MensajeController.NO_ENCONTRADO, 404));
        }

        res.json(BaseResponse.success(usuario, MensajeController.CONSULTA_OK));
    } catch (error: any) {
        console.error("Error buscarPorCorreo:", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};*/
// Actualizar usuario
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        const data = req.body;
        console.log("👉 ID recibido:", idUsuario);
        console.log("👉 Data recibida:", data);
        yield usuarioService.actualizarUsuario(idUsuario, data);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("❌ Error actualizarUsuario:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.actualizarUsuario = actualizarUsuario;
// Eliminar usuario (soft delete)
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        yield usuarioService.eliminarUsuario(idUsuario);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ELIMINADO_OK));
    }
    catch (error) {
        console.error("Error eliminarUsuario:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.eliminarUsuario = eliminarUsuario;
// Activar usuario
const activarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUsuario = parseInt(req.params.idUsuario);
        yield usuarioService.activarUsuario(idUsuario);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error activarUsuario:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.activarUsuario = activarUsuario;
const obtenerUsuarioPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        res.status(400).json({
            success: false,
            message: "ID inválido",
            data: null
        });
        return;
    }
    try {
        const usuario = yield appdatasource_1.default.getRepository(usuario_1.Usuario).findOne({
            where: { idUsuario: id },
            relations: ["rol"]
        });
        if (!usuario) {
            res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
                data: null
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Usuario encontrado",
            data: usuario
        });
    }
    catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({
            success: false,
            message: "Error interno del servidor",
            data: null
        });
    }
});
exports.obtenerUsuarioPorId = obtenerUsuarioPorId;
//# sourceMappingURL=usuario.controller.js.map