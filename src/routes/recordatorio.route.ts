import { Router } from "express";
import * as recordatorioController from "../controllers/recordatorio.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /recordatorios
router.post("/", verificarJWT, recordatorioController.insertarRecordatorio);

// GET /recordatorios
router.get("/", verificarJWT, recordatorioController.listarRecordatorios);

// GET /recordatorios/activos
router.get("/activos", verificarJWT, recordatorioController.listarRecordatoriosActivos);

// GET /recordatorios/habito/:idHabito
router.get("/habito/:idHabito", verificarJWT, recordatorioController.listarRecordatoriosPorHabito);

// PUT /recordatorios/:idRecordatorio
router.put("/:idRecordatorio", verificarJWT, recordatorioController.actualizarRecordatorio);

// PUT /recordatorios/activar/:idRecordatorio
router.put("/activar/:idRecordatorio", verificarJWT, recordatorioController.activarRecordatorio);

// DELETE /recordatorios/:idRecordatorio
router.delete("/:idRecordatorio", verificarJWT, recordatorioController.eliminarRecordatorio);

export default router;
