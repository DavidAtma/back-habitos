import { Router } from "express";
import * as habitoController from "../controllers/habito.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /habitos
router.post("/", habitoController.insertarHabito);

// GET /habitos
router.get("/", habitoController.listarHabitos);

// GET /habitos/activos
router.get("/activos", habitoController.listarHabitosActivos);

// GET /habitos/usuario/:idUsuario
router.get("/usuario/:idUsuario", habitoController.listarHabitosPorUsuario);

// PUT /habitos/:idHabito
router.put("/:idHabito", habitoController.actualizarHabito);

// PATCH /habitos/activar/:idHabito
router.patch("/activar/:idHabito", habitoController.activarHabito);

// DELETE /habitos/:idHabito
router.delete("/:idHabito", habitoController.eliminarHabito);

export default router;
