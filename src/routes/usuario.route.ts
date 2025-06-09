import { listarUsuario } from "../services/usuario.service";


const router: Router = Router();
router.post('/', insertarUsuario);
router.get('/', listarUsuario);
export default router;