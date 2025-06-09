import { Router } from "express";
import { insertarCategoria, listarCategoria } from "../controllers/categoria.controller";


const router: Router = Router();
router.post('/', insertarCategoria);
router.get('/', listarCategoria);


export default router;