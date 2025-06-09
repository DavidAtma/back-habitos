import { Router } from "express";
import { insertarSeguimiento, listarSeguimientos } from "../controllers/seguimiento.controller";



const router: Router = Router();
router.post('/', insertarSeguimiento);
router.get('/', listarSeguimientos);

export default router;
