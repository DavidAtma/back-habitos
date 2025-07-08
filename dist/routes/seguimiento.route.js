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
const seguimientoController = __importStar(require("../controllers/seguimiento.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Crear seguimiento (POST)
router.post("/", auth_middleware_1.verificarJWT, seguimientoController.insertarSeguimiento);
// Obtener todos los seguimientos activos (GET)
router.get("/activos", auth_middleware_1.verificarJWT, seguimientoController.listarSeguimientosActivos);
// Obtener todos los seguimientos (GET)
router.get("/", auth_middleware_1.verificarJWT, seguimientoController.listarSeguimientos);
// Obtener seguimientos por hábito (GET)
router.get("/habito/:idHabito", auth_middleware_1.verificarJWT, seguimientoController.listarSeguimientosPorHabito);
// Obtener seguimientos por usuario y fecha (GET)
router.get("/usuario/:idUsuario/fecha/:fecha", auth_middleware_1.verificarJWT, seguimientoController.listarSeguimientosPorUsuarioYFecha);
// Nueva: Obtener todos los seguimientos completados por usuario (sin fecha)
router.get("/usuario/:idUsuario/completados", auth_middleware_1.verificarJWT, seguimientoController.listarSeguimientosCompletadosPorUsuario);
// Actualizar seguimiento (PUT)
router.put("/:idSeguimiento", auth_middleware_1.verificarJWT, seguimientoController.actualizarSeguimiento);
// Activar seguimiento (PUT)
router.put("/activar/:idSeguimiento", auth_middleware_1.verificarJWT, seguimientoController.activarSeguimiento);
// Eliminar seguimiento (DELETE)
router.delete("/:idSeguimiento", auth_middleware_1.verificarJWT, seguimientoController.eliminarSeguimiento);
exports.default = router;
//# sourceMappingURL=seguimiento.route.js.map