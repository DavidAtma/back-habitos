import { Router } from "express";
import { insertarHabito, listarHabitos } from "../controllers/habito.controller";


const router: Router = Router();
router.post('/', insertarHabito);
router.get('/', listarHabitos);
export default router;