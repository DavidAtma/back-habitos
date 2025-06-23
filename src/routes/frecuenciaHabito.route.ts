import { Router } from "express";
import * as frecuenciaController from "../controllers/frecuenciaHabito.controller";

const router = Router();

// POST /frecuencias
router.post("/", frecuenciaController.insertarFrecuencia);

// GET /frecuencias
router.get("/", frecuenciaController.listarFrecuencias);

// GET /frecuencias/habito/:idHabito
router.get("/habito/:idHabito", frecuenciaController.listarFrecuenciasPorHabito);

// PUT /frecuencias/:idFrecuencia
router.put("/:idFrecuencia", frecuenciaController.actualizarFrecuencia);

// DELETE /frecuencias/:idFrecuencia
router.delete("/:idFrecuencia", frecuenciaController.eliminarFrecuencia);

export default router;
