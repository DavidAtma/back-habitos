"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seguimiento_controller_1 = require("../controllers/seguimiento.controller");
const router = (0, express_1.Router)();
router.post('/', seguimiento_controller_1.insertarSeguimiento);
router.get('/', seguimiento_controller_1.listarSeguimientos);
exports.default = router;
//# sourceMappingURL=seguimiento.route.js.map