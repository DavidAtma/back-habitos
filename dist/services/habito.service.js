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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarHabitos = exports.insertarHabito = void 0;
const appdatasource_1 = require("../config/appdatasource");
const habito_1 = require("../entities/habito");
const insertarHabito = (habito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    yield repository.save(habito);
});
exports.insertarHabito = insertarHabito;
const listarHabitos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    return yield repository.find({
        relations: ['usuario', 'categoria'],
    });
});
exports.listarHabitos = listarHabitos;
//# sourceMappingURL=habito.service.js.map