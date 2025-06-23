import { Router } from "express";
import * as habitoController from "../controllers/habito.controller";

const router = Router();

// Ruta: POST /habitos
router.post("/", habitoController.insertarHabito);

// Ruta: GET /habitos
router.get("/", habitoController.listarHabitos);

// Ruta: GET /habitos/usuario/:idUsuario
router.get("/usuario/:idUsuario", habitoController.listarHabitosPorUsuario);

// Ruta: PUT /habitos/:idHabito
router.put("/:idHabito", habitoController.actualizarHabito);

// Ruta: DELETE /habitos/:idHabito
router.delete("/:idHabito", habitoController.eliminarHabito);

export default router;
