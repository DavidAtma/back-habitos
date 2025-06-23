import { Router } from "express";
import * as rolController from "../controllers/rol.controller";

const router = Router();

// POST /roles
router.post("/", rolController.insertarRol);

// GET /roles
router.get("/", rolController.listarRoles);

// PUT /roles/:idRol
router.put("/:idRol", rolController.actualizarRol);

// DELETE /roles/:idRol
router.delete("/:idRol", rolController.eliminarRol);

export default router;
