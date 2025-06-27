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
exports.activarRol = exports.eliminarRol = exports.actualizarRol = exports.listarRolesActivos = exports.listarRoles = exports.insertarRol = void 0;
const rolService = __importStar(require("../services/rol.service"));
const base_response_1 = require("../shared/base-response");
const constants_1 = require("../shared/constants");
// Insertar rol
const insertarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rol = req.body;
        const nuevoRol = yield rolService.insertarRol(rol);
        res.json(base_response_1.BaseResponse.success(nuevoRol.idRol, constants_1.MensajeController.INSERTADO_OK));
    }
    catch (error) {
        console.error("Error insertarRol:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarRol = insertarRol;
// Listar todos los roles
const listarRoles = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield rolService.listarRoles();
        res.json(base_response_1.BaseResponse.success(roles, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarRoles:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarRoles = listarRoles;
// Listar roles activos
const listarRolesActivos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield rolService.listarRolesActivos();
        res.json(base_response_1.BaseResponse.success(roles, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarRolesActivos:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.listarRolesActivos = listarRolesActivos;
// Actualizar rol
const actualizarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRol = parseInt(req.params.idRol);
        const data = req.body;
        yield rolService.actualizarRol(idRol, data);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error actualizarRol:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.actualizarRol = actualizarRol;
// Eliminar rol (soft delete)
const eliminarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRol = parseInt(req.params.idRol);
        yield rolService.eliminarRol(idRol);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ELIMINADO_OK));
    }
    catch (error) {
        console.error("Error eliminarRol:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.eliminarRol = eliminarRol;
// Activar rol
const activarRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idRol = parseInt(req.params.idRol);
        yield rolService.activarRol(idRol);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error activarRol:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.activarRol = activarRol;
//# sourceMappingURL=rol.controller.js.map