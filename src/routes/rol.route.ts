import { Router } from "express";
import * as rolController from "../controllers/rol.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /roles
router.post("/", verificarJWT, rolController.insertarRol);

// GET /roles
router.get("/", verificarJWT, rolController.listarRoles);

// GET /roles/activos
router.get("/activos", verificarJWT, rolController.listarRolesActivos);

// PUT /roles/:idRol
router.put("/:idRol", verificarJWT, rolController.actualizarRol);

// PUT /roles/activar/:idRol
router.put("/activar/:idRol", verificarJWT, rolController.activarRol);

// DELETE /roles/:idRol
router.delete("/:idRol", verificarJWT, rolController.eliminarRol);

export default router;
