import { Router } from "express";
import * as recordatorioController from "../controllers/recordatorio.controller";

const router = Router();

// POST /recordatorios
router.post("/", recordatorioController.insertarRecordatorio);

// GET /recordatorios
router.get("/", recordatorioController.listarRecordatorios);

// GET /recordatorios/habito/:idHabito
router.get("/habito/:idHabito", recordatorioController.listarRecordatoriosPorHabito);

// PUT /recordatorios/:idRecordatorio
router.put("/:idRecordatorio", recordatorioController.actualizarRecordatorio);

// DELETE /recordatorios/:idRecordatorio
router.delete("/:idRecordatorio", recordatorioController.eliminarRecordatorio);

export default router;
