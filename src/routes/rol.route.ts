import { Router } from "express";
import { insertarRol, listarRol } from "../controllers/rol.controller";

const router: Router = Router();
router.post('/', insertarRol);
router.get('/', listarRol);
export default router;