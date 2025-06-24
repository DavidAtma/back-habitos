"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_controller_1 = require("../controllers/rol.controller");
const router = (0, express_1.Router)();
router.post('/', rol_controller_1.insertarRol);
router.get('/', rol_controller_1.listarRol);
exports.default = router;
//# sourceMappingURL=rol.route.js.map