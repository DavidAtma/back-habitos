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
const habitoController = __importStar(require("../controllers/habito.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// POST /habitos
router.post("/", auth_middleware_1.verificarJWT, habitoController.insertarHabito);
// GET /habitos
router.get("/", auth_middleware_1.verificarJWT, habitoController.listarHabitos);
// GET /habitos/activos
router.get("/activos", auth_middleware_1.verificarJWT, habitoController.listarHabitosActivos);
// GET /habitos/usuario/:idUsuario
router.get("/usuario/:idUsuario", auth_middleware_1.verificarJWT, habitoController.listarHabitosPorUsuario);
// PUT /habitos/:idHabito
router.put("/:idHabito", auth_middleware_1.verificarJWT, habitoController.actualizarHabito);
// PATCH /habitos/activar/:idHabito
router.patch("/activar/:idHabito", auth_middleware_1.verificarJWT, habitoController.activarHabito);
// DELETE /habitos/:idHabito
router.delete("/:idHabito", auth_middleware_1.verificarJWT, habitoController.eliminarHabito);
router.get("/:idHabito", auth_middleware_1.verificarJWT, habitoController.obtenerHabitoPorId); // Ruta para obtener un hábito por su ID
exports.default = router;
//# sourceMappingURL=habito.route.js.map