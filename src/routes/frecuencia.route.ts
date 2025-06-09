import { Router } from "express";
import { insertarFrecuencia, listarFrecuencia } from "../controllers/frecuencia.controller";

const router: Router = Router();
router.post('/', insertarFrecuencia);
router.get('/', listarFrecuencia);


export default router;