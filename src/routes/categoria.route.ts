import { Router } from "express";
import * as categoriaController from "../controllers/categoria.controller";

const router = Router();

// POST /categorias
router.post("/", categoriaController.insertarCategoria);

// GET /categorias
router.get("/", categoriaController.listarCategorias);

// PUT /categorias/:idCategoria
router.put("/:idCategoria", categoriaController.actualizarCategoria);

// DELETE /categorias/:idCategoria
router.delete("/:idCategoria", categoriaController.eliminarCategoria);

export default router;
