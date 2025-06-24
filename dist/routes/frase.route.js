"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const frase_controller_1 = require("../controllers/frase.controller");
const router = (0, express_1.Router)();
router.post('/', frase_controller_1.insertarFrase);
router.get('/', frase_controller_1.listarFrase);
exports.default = router;
//# sourceMappingURL=frase.route.js.map