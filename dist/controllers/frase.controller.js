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
exports.listarFrase = exports.insertarFrase = void 0;
const fraseService = __importStar(require("../services/frase.service"));
const base_response_1 = require("../shared/base-response");
const constants_1 = require("../shared/constants");
const insertarFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frase = req.body;
        yield fraseService.insertarFrase(frase);
        res.json(base_response_1.BaseResponse.success(null, constants_1.MensajeController.INSERTADO_OK));
    }
    catch (error) {
        console.error(error);
        res.status(500).json(base_response_1.BaseResponse.error(error.message));
    }
});
exports.insertarFrase = insertarFrase;
const listarFrase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const frase = yield fraseService.listarFrase();
        if (!frase) {
            res.status(404).json(base_response_1.BaseResponse.error("No se encontraron frases"));
            return;
        }
        res.status(200).json(base_response_1.BaseResponse.success(frase, "Frase aleatoria obtenida correctamente"));
    }
    catch (error) {
        console.error("Error listarFrase:", error);
        if (error instanceof Error) {
            res.status(500).json(base_response_1.BaseResponse.error(error.message));
        }
        else {
            res.status(500).json(base_response_1.BaseResponse.error("Error inesperado al listar frase"));
        }
    }
});
exports.listarFrase = listarFrase;
//# sourceMappingURL=frase.controller.js.map