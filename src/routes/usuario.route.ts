import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /usuarios
router.post("/", verificarJWT, usuarioController.insertarUsuario);

// GET /usuarios
router.get("/", verificarJWT, usuarioController.listarUsuarios);

// GET /usuarios/activos
router.get("/activos", verificarJWT, usuarioController.listarUsuariosActivos);

// GET /usuarios/correo/:correo
// router.get("/correo", verificarJWT, usuarioController.buscarPorCorreo);

// PUT /usuarios/:idUsuario
router.put("/:idUsuario", verificarJWT, usuarioController.actualizarUsuario);

// PUT /usuarios/activar/:idUsuario
router.put("/activar/:idUsuario", verificarJWT, usuarioController.activarUsuario);

// DELETE /usuarios/:idUsuario
router.delete("/:idUsuario", verificarJWT, usuarioController.eliminarUsuario);

export default router;
