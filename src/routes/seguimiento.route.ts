import { Router } from "express";
import * as seguimientoController from "../controllers/seguimiento.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /seguimientos
router.post("/", seguimientoController.insertarSeguimiento);

// GET /seguimientos/activos
router.get("/activos", seguimientoController.listarSeguimientosActivos);

// GET /seguimientos
router.get("/", seguimientoController.listarSeguimientos);

// GET /seguimientos/habito/:idHabito
router.get("/habito/:idHabito", seguimientoController.listarSeguimientosPorHabito);

// Nuevo GET /seguimientos/usuario/:idUsuario/fecha/:fecha
router.get("/usuario/:idUsuario/fecha/:fecha", seguimientoController.listarSeguimientosPorUsuarioYFecha);

// PUT /seguimientos/:idSeguimiento (cambiar de idFrecuencia a idSeguimiento)
router.put("/:idSeguimiento", seguimientoController.actualizarSeguimiento);

// PUT /seguimientos/activar/:idSeguimiento
router.put("/activar/:idSeguimiento", seguimientoController.activarSeguimiento);

// DELETE /seguimientos/:idSeguimiento (cambiar de idFrecuencia a idSeguimiento)
router.delete("/:idSeguimiento", seguimientoController.eliminarSeguimiento);

export default router;
