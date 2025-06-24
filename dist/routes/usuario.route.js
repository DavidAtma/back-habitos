"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.post('/', usuario_controller_1.insertarUsuario);
router.get('/', usuario_controller_1.listarUsuario);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map