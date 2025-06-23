"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarSeguimientos = exports.insertarSeguimiento = void 0;
const appdatasource_1 = __importDefault(require("../config/appdatasource"));
const seguimiento_1 = require("../entities/seguimiento");
const insertarSeguimiento = (seguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.default.isInitialized) {
        yield appdatasource_1.default.initialize();
    }
    const repository = appdatasource_1.default.getRepository(seguimiento_1.Seguimiento);
    yield repository.save(seguimiento);
});
exports.insertarSeguimiento = insertarSeguimiento;
const listarSeguimientos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.default.isInitialized) {
        yield appdatasource_1.default.initialize();
    }
    const repository = appdatasource_1.default.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({});
});
exports.listarSeguimientos = listarSeguimientos;
//# sourceMappingURL=seguimiento.service.js.map