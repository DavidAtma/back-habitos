import { Router } from "express";
import * as fraseController from "../controllers/fraseMotivacional.controller";

const router = Router();

// POST /frases
router.post("/", fraseController.insertarFrase);

// GET /frases
router.get("/", fraseController.listarFrases);

// PUT /frases/:idFrase
router.put("/:idFrase", fraseController.actualizarFrase);

// DELETE /frases/:idFrase
router.delete("/:idFrase", fraseController.eliminarFrase);

export default router;
