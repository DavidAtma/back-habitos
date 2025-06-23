import { Router } from "express";
import * as seguimientoController from "../controllers/seguimiento.controller";

const router = Router();

// POST /seguimientos
router.post("/", seguimientoController.insertarSeguimiento);

// GET /seguimientos
router.get("/", seguimientoController.listarSeguimientos);

// GET /seguimientos/habito/:idHabito
router.get("/habito/:idHabito", seguimientoController.listarSeguimientosPorHabito);

// PUT /seguimientos/:idFrecuencia
router.put("/:idFrecuencia", seguimientoController.actualizarSeguimiento);

// DELETE /seguimientos/:idFrecuencia
router.delete("/:idFrecuencia", seguimientoController.eliminarSeguimiento);

export default router;
