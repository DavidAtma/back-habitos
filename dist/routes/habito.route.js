"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const habito_controller_1 = require("../controllers/habito.controller");
const router = (0, express_1.Router)();
router.post('/', habito_controller_1.insertarHabito);
router.get('/', habito_controller_1.listarHabitos);
exports.default = router;
//# sourceMappingURL=habito.route.js.map