import { Router } from "express";
import * as frecuenciaController from "../controllers/frecuenciaHabito.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /frecuencias
router.post("/", verificarJWT, frecuenciaController.insertarFrecuencia);

// GET /frecuencias
router.get("/", verificarJWT, frecuenciaController.listarFrecuencias);

// GET /frecuencias/activas
router.get("/activas", verificarJWT, frecuenciaController.listarFrecuenciasActivas);

// GET /frecuencias/habito/:idHabito
router.get("/habito/:idHabito", verificarJWT, frecuenciaController.listarFrecuenciasPorHabito);

// PUT /frecuencias/:idFrecuencia
router.put("/:idFrecuencia", verificarJWT, frecuenciaController.actualizarFrecuencia);

// DELETE /frecuencias/:idFrecuencia
router.delete("/:idFrecuencia", verificarJWT, frecuenciaController.eliminarFrecuencia);

// PATCH /frecuencias/activar/:idFrecuencia
router.patch("/activar/:idFrecuencia", verificarJWT, frecuenciaController.activarFrecuencia);

export default router;
