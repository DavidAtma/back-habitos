import { Router } from "express";
import { insertarUsuario, listarUsuario } from "../controllers/usuario.controller";


const router: Router = Router();
router.post('/', insertarUsuario);
router.get('/', listarUsuario);
export default router;