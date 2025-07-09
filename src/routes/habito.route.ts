import { Router } from "express";
import * as habitoController from "../controllers/habito.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /habitos
router.post("/", verificarJWT, habitoController.insertarHabito);

// GET /habitos
router.get("/", verificarJWT, habitoController.listarHabitos);

// GET /habitos/activos
router.get("/activos", verificarJWT, habitoController.listarHabitosActivos);

// GET /habitos/usuario/:idUsuario
router.get("/usuario/:idUsuario", verificarJWT, habitoController.listarHabitosPorUsuario);

// PUT /habitos/:idHabito
router.put("/:idHabito", verificarJWT, habitoController.actualizarHabito);

// PATCH /habitos/activar/:idHabito
router.patch("/activar/:idHabito", verificarJWT, habitoController.activarHabito);

// DELETE /habitos/:idHabito
router.delete("/:idHabito", verificarJWT, habitoController.eliminarHabito);

router.get("/:idHabito", verificarJWT, habitoController.obtenerHabitoPorId);  // Ruta para obtener un hábito por su ID

export default router;
