"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recordatorio_controller_1 = require("../controllers/recordatorio.controller");
const router = (0, express_1.Router)();
router.post('/', recordatorio_controller_1.insertarRecordatorio);
router.get('/', recordatorio_controller_1.listarRecordatorio);
exports.default = router;
//# sourceMappingURL=recordatorio.route.js.map