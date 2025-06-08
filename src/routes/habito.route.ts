import { Router } from "express";
import { insertarHabito } from "../controllers/habito.controller";

const router: Router = Router();
router.post('/', insertarHabito);

export default router;