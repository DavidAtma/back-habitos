import { Router } from "express";
import * as fraseController from "../controllers/fraseMotivacional.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /frases
router.post("/", fraseController.insertarFrase);

// GET /frases
router.get("/", fraseController.listarFrases);

// GET /frases/activas
router.get("/activas", fraseController.listarFrasesActivas);

// PUT /frases/:idFrase
router.put("/:idFrase", fraseController.actualizarFrase);

// DELETE /frases/:idFrase (desactiva)
router.delete("/:idFrase", fraseController.eliminarFrase);

// PUT /frases/activar/:idFrase (reactiva)
router.put("/activar/:idFrase", fraseController.activarFrase);

export default router;
