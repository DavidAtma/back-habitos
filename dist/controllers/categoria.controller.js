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
exports.activarCategoria = exports.eliminarCategoria = exports.actualizarCategoria = exports.listarCategoriasActivas = exports.listarCategorias = exports.insertarCategoria = void 0;
const categoriaService = __importStar(require("../services/categoria.service"));
const base_response_1 = require("../shared/base-response");
const constants_1 = require("../shared/constants");
// Insertar categoría
const insertarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoria = req.body;
        const nuevaCategoria = yield categoriaService.insertarCategoria(categoria);
        res.json(base_response_1.BaseResponse.success(nuevaCategoria.idCategoria, constants_1.MensajeController.INSERTADO_OK));
    }
    catch (error) {
        console.error("Error insertarCategoria:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarCategoria = insertarCategoria;
// Listar todas las categorías
const listarCategorias = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield categoriaService.listarCategorias();
        res.status(200).json(base_response_1.BaseResponse.success(categorias, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarCategorias:", error.message);
        res.status(500).json(base_response_1.BaseResponse.error("Error al listar categorías"));
    }
});
exports.listarCategorias = listarCategorias;
// Listar categorías activas
const listarCategoriasActivas = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categorias = yield categoriaService.listarCategoriasActivas();
        res.status(200).json(base_response_1.BaseResponse.success(categorias, constants_1.MensajeController.CONSULTA_OK));
    }
    catch (error) {
        console.error("Error listarCategoriasActivas:", error.message);
        res.status(500).json(base_response_1.BaseResponse.error("Error al listar categorías activas"));
    }
});
exports.listarCategoriasActivas = listarCategoriasActivas;
// Actualizar categoría
const actualizarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCategoria = parseInt(req.params.idCategoria);
        const data = req.body;
        yield categoriaService.actualizarCategoria(idCategoria, data);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error actualizarCategoria:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.actualizarCategoria = actualizarCategoria;
// Eliminar (desactivar) categoría
const eliminarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCategoria = parseInt(req.params.idCategoria);
        yield categoriaService.eliminarCategoria(idCategoria);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ELIMINADO_OK));
    }
    catch (error) {
        console.error("Error eliminarCategoria:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.eliminarCategoria = eliminarCategoria;
// Activar categoría
const activarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idCategoria = parseInt(req.params.idCategoria);
        yield categoriaService.activarCategoria(idCategoria);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.ACTUALIZADO_OK));
    }
    catch (error) {
        console.error("Error activarCategoria:", error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.activarCategoria = activarCategoria;
//# sourceMappingURL=categoria.controller.js.map