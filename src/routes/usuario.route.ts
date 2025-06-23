import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller";

const router = Router();

// POST /usuarios
router.post("/", usuarioController.insertarUsuario);

// GET /usuarios
router.get("/", usuarioController.listarUsuarios);

// GET /usuarios/correo/:correo
router.get("/correo/:correo", usuarioController.buscarPorCorreo);

// PUT /usuarios/:idUsuario
router.put("/:idUsuario", usuarioController.actualizarUsuario);

// DELETE /usuarios/:idUsuario
router.delete("/:idUsuario", usuarioController.eliminarUsuario);

// POST /usuarios/login
router.post("/login", usuarioController.loginUsuario);

export default router;
