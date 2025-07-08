import { Router } from "express";
import * as seguimientoController from "../controllers/seguimiento.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// Crear seguimiento (POST)
router.post("/", verificarJWT, seguimientoController.insertarSeguimiento);

// Obtener todos los seguimientos activos (GET)
router.get("/activos", verificarJWT, seguimientoController.listarSeguimientosActivos);

// Obtener todos los seguimientos (GET)
router.get("/", verificarJWT, seguimientoController.listarSeguimientos);

// Obtener seguimientos por hábito (GET)
router.get("/habito/:idHabito", verificarJWT, seguimientoController.listarSeguimientosPorHabito);

// Obtener seguimientos por usuario y fecha (GET)
router.get("/usuario/:idUsuario/fecha/:fecha", verificarJWT, seguimientoController.listarSeguimientosPorUsuarioYFecha);

// Nueva: Obtener todos los seguimientos completados por usuario (sin fecha)
router.get("/usuario/:idUsuario/completados", verificarJWT, seguimientoController.listarSeguimientosCompletadosPorUsuario);

// Actualizar seguimiento (PUT)
router.put("/:idSeguimiento", verificarJWT, seguimientoController.actualizarSeguimiento);

// Activar seguimiento (PUT)
router.put("/activar/:idSeguimiento", verificarJWT, seguimientoController.activarSeguimiento);

// Eliminar seguimiento (DELETE)
router.delete("/:idSeguimiento", verificarJWT, seguimientoController.eliminarSeguimiento);

export default router;
