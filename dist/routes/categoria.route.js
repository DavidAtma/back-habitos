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
const categoriaController = __importStar(require("../controllers/categoria.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// POST /categorias
router.post("/", auth_middleware_1.verificarJWT, categoriaController.insertarCategoria);
// GET /categorias (todas)
router.get("/", auth_middleware_1.verificarJWT, categoriaController.listarCategorias);
// GET /categorias/activas
router.get("/activas", auth_middleware_1.verificarJWT, categoriaController.listarCategoriasActivas);
// PUT /categorias/:idCategoria (actualizar)
router.put("/:idCategoria", auth_middleware_1.verificarJWT, categoriaController.actualizarCategoria);
// PUT /categorias/activar/:idCategoria (activar una categoría)
router.put("/activar/:idCategoria", auth_middleware_1.verificarJWT, categoriaController.activarCategoria);
// DELETE /categorias/:idCategoria (desactivar una categoría)
router.delete("/:idCategoria", auth_middleware_1.verificarJWT, categoriaController.eliminarCategoria);
exports.default = router;
//# sourceMappingURL=categoria.route.js.map