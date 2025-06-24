"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const router = (0, express_1.Router)();
router.post('/', categoria_controller_1.insertarCategoria);
router.get('/', categoria_controller_1.listarCategoria);
exports.default = router;
//# sourceMappingURL=categoria.route.js.map