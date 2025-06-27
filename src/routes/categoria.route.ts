import { Router } from "express";
import * as categoriaController from "../controllers/categoria.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /categorias
router.post("/", categoriaController.insertarCategoria);

// GET /categorias (todas)
router.get("/", categoriaController.listarCategorias);

// GET /categorias/activas
router.get("/activas", categoriaController.listarCategoriasActivas);

// PUT /categorias/:idCategoria (actualizar)
router.put("/:idCategoria", categoriaController.actualizarCategoria);

// PUT /categorias/activar/:idCategoria (activar una categoría)
router.put("/activar/:idCategoria", categoriaController.activarCategoria);

// DELETE /categorias/:idCategoria (desactivar una categoría)
router.delete("/:idCategoria", categoriaController.eliminarCategoria);

export default router;
