import { Router } from "express";
import * as frecuenciaController from "../controllers/frecuenciaHabito.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /frecuencias
router.post("/", frecuenciaController.insertarFrecuencia);

// GET /frecuencias
router.get("/", frecuenciaController.listarFrecuencias);

// GET /frecuencias/activas
router.get("/activas", frecuenciaController.listarFrecuenciasActivas);

// GET /frecuencias/habito/:idHabito
router.get("/habito/:idHabito", frecuenciaController.listarFrecuenciasPorHabito);

// PUT /frecuencias/:idFrecuencia
router.put("/:idFrecuencia", frecuenciaController.actualizarFrecuencia);

// DELETE /frecuencias/:idFrecuencia
router.delete("/:idFrecuencia", frecuenciaController.eliminarFrecuencia);

// PATCH /frecuencias/activar/:idFrecuencia
router.patch("/activar/:idFrecuencia", frecuenciaController.activarFrecuencia);

export default router;
