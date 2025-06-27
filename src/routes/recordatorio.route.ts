import { Router } from "express";
import * as recordatorioController from "../controllers/recordatorio.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /recordatorios
router.post("/", recordatorioController.insertarRecordatorio);

// GET /recordatorios
router.get("/", recordatorioController.listarRecordatorios);

// GET /recordatorios/activos
router.get("/activos", recordatorioController.listarRecordatoriosActivos);

// GET /recordatorios/habito/:idHabito
router.get("/habito/:idHabito", recordatorioController.listarRecordatoriosPorHabito);

// PUT /recordatorios/:idRecordatorio
router.put("/:idRecordatorio", recordatorioController.actualizarRecordatorio);

// PUT /recordatorios/activar/:idRecordatorio
router.put("/activar/:idRecordatorio", recordatorioController.activarRecordatorio);

// DELETE /recordatorios/:idRecordatorio
router.delete("/:idRecordatorio", recordatorioController.eliminarRecordatorio);

export default router;
