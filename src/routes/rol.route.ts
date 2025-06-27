import { Router } from "express";
import * as rolController from "../controllers/rol.controller";
import { verificarJWT } from "../middlewares/auth.middleware";

const router = Router();

// POST /roles
router.post("/", rolController.insertarRol);

// GET /roles
router.get("/", rolController.listarRoles);

// GET /roles/activos
router.get("/activos", rolController.listarRolesActivos);

// PUT /roles/:idRol
router.put("/:idRol", rolController.actualizarRol);

// PUT /roles/activar/:idRol
router.put("/activar/:idRol", rolController.activarRol);

// DELETE /roles/:idRol
router.delete("/:idRol", rolController.eliminarRol);

export default router;
