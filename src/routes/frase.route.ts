import { Router } from "express";
import { insertarFrase, listarFrase} from "../controllers/frase.controller";


const router: Router = Router();
router.post('/', insertarFrase);
router.get('/', listarFrase)


export default router;