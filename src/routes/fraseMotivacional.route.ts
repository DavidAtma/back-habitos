import { Router } from "express";
import * as fraseController from "../controllers/fraseMotivacional.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// Protegemos TODAS las rutas con verificarJWT
router.post("/", verificarJWT, fraseController.insertarFrase);
router.get("/", verificarJWT, fraseController.listarFrases);
router.get("/activas", verificarJWT, fraseController.listarFrasesActivas);
router.put("/:idFrase", verificarJWT, fraseController.actualizarFrase);
router.delete("/:idFrase", verificarJWT, fraseController.eliminarFrase);
router.put("/activar/:idFrase", verificarJWT, fraseController.activarFrase);
router.get("/:idFrase", verificarJWT, fraseController.obtenerFrasePorId);

export default router;

