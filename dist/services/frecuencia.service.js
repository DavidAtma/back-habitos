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
exports.listarFrecuencia = exports.insertarFrecuencia = void 0;
const appdatasource_1 = __importDefault(require("../config/appdatasource"));
const frecuenciaHabito_1 = require("../entities/frecuenciaHabito");
const insertarFrecuencia = (frecuenciaHabito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.default.isInitialized) {
        yield appdatasource_1.default.initialize();
    }
    const repository = appdatasource_1.default.getRepository(frecuenciaHabito_1.FrecuenciaHabito);
    yield repository.save(frecuenciaHabito);
});
exports.insertarFrecuencia = insertarFrecuencia;
const listarFrecuencia = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.default.isInitialized) {
        yield appdatasource_1.default.initialize();
    }
    const repository = appdatasource_1.default.getRepository(frecuenciaHabito_1.FrecuenciaHabito);
    return yield repository.find({
        relations: ['habito'],
    });
});
exports.listarFrecuencia = listarFrecuencia;
//# sourceMappingURL=frecuencia.service.js.map