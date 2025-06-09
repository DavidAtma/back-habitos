import { Router } from "express";
import { insertarRecordatorio, listarRecordatorio } from "../controllers/recordatorio.controller";


const router: Router = Router();
router.post('/', insertarRecordatorio);
router.get('/', listarRecordatorio);
export default router;