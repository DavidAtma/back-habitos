import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /usuarios
router.post("/", usuarioController.insertarUsuario);

// GET /usuarios
router.get("/", usuarioController.listarUsuarios);

// GET /usuarios/activos
router.get("/activos", usuarioController.listarUsuariosActivos);

// GET /usuarios/correo/:correo
//router.get("/correo", usuarioController.buscarPorCorreo);

// PUT /usuarios/:idUsuario
router.put("/:idUsuario", usuarioController.actualizarUsuario);

// PUT /usuarios/activar/:idUsuario
router.put("/activar/:idUsuario", usuarioController.activarUsuario);

// DELETE /usuarios/:idUsuario
router.delete("/:idUsuario", usuarioController.eliminarUsuario);

export default router;
