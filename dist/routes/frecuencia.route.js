"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const frecuencia_controller_1 = require("../controllers/frecuencia.controller");
const router = (0, express_1.Router)();
router.post('/', frecuencia_controller_1.insertarFrecuencia);
router.get('/', frecuencia_controller_1.listarFrecuencia);
exports.default = router;
//# sourceMappingURL=frecuencia.route.js.map