import { Router } from "express";
import * as seguimientoController from "../controllers/seguimiento.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /seguimientos
router.post("/", verificarJWT, seguimientoController.insertarSeguimiento);

// GET /seguimientos/activos
router.get("/activos", verificarJWT, seguimientoController.listarSeguimientosActivos);

// GET /seguimientos
router.get("/", verificarJWT, seguimientoController.listarSeguimientos);

// GET /seguimientos/habito/:idHabito
router.get("/habito/:idHabito", verificarJWT, seguimientoController.listarSeguimientosPorHabito);

// GET /seguimientos/usuario/:idUsuario
router.get("/usuario/:idUsuario", verificarJWT, seguimientoController.listarSeguimientosPorUsuario);

// Nuevo GET /seguimientos/usuario/:idUsuario/fecha/:fecha
router.get("/usuario/:idUsuario/fecha/:fecha", verificarJWT, seguimientoController.listarSeguimientosPorUsuarioYFecha);

// PUT /seguimientos/:idSeguimiento
router.put("/:idSeguimiento", verificarJWT, seguimientoController.actualizarSeguimiento);

// PUT /seguimientos/activar/:idSeguimiento
router.put("/activar/:idSeguimiento", verificarJWT, seguimientoController.activarSeguimiento);

// DELETE /seguimientos/:idSeguimiento
router.delete("/:idSeguimiento", verificarJWT, seguimientoController.eliminarSeguimiento);

export default router;
