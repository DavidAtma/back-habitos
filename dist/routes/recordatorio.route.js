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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recordatorioController = __importStar(require("../controllers/recordatorio.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// POST /recordatorios
router.post("/", auth_middleware_1.verificarJWT, recordatorioController.insertarRecordatorio);
// GET /recordatorios
router.get("/", auth_middleware_1.verificarJWT, recordatorioController.listarRecordatorios);
// GET /recordatorios/activos
router.get("/activos", auth_middleware_1.verificarJWT, recordatorioController.listarRecordatoriosActivos);
// GET /recordatorios/habito/:idHabito
router.get("/habito/:idHabito", auth_middleware_1.verificarJWT, recordatorioController.listarRecordatoriosPorHabito);
// PUT /recordatorios/:idRecordatorio
router.put("/:idRecordatorio", auth_middleware_1.verificarJWT, recordatorioController.actualizarRecordatorio);
// PUT /recordatorios/activar/:idRecordatorio
router.put("/activar/:idRecordatorio", auth_middleware_1.verificarJWT, recordatorioController.activarRecordatorio);
// DELETE /recordatorios/:idRecordatorio
router.delete("/:idRecordatorio", auth_middleware_1.verificarJWT, recordatorioController.eliminarRecordatorio);
exports.default = router;
//# sourceMappingURL=recordatorio.route.js.map