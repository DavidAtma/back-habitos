import { Router } from "express";
import * as categoriaController from "../controllers/categoria.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /categorias
router.post("/", verificarJWT, categoriaController.insertarCategoria);

// GET /categorias (todas)
router.get("/", verificarJWT, categoriaController.listarCategorias);

// GET /categorias/activas
router.get("/activas", verificarJWT, categoriaController.listarCategoriasActivas);

// PUT /categorias/:idCategoria (actualizar)
router.put("/:idCategoria", verificarJWT, categoriaController.actualizarCategoria);

// PUT /categorias/activar/:idCategoria (activar una categoría)
router.put("/activar/:idCategoria", verificarJWT, categoriaController.activarCategoria);

// DELETE /categorias/:idCategoria (desactivar una categoría)
router.delete("/:idCategoria", verificarJWT, categoriaController.eliminarCategoria);

export default router;
