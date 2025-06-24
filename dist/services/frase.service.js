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
exports.listarFrase = exports.insertarFrase = void 0;
const appdatasource_1 = __importDefault(require("../config/appdatasource"));
const fraseMotivacional_1 = require("../entities/fraseMotivacional");
const insertarFrase = (fraseMotivacional) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.default.isInitialized) {
        yield appdatasource_1.default.initialize();
    }
    const repository = appdatasource_1.default.getRepository(fraseMotivacional_1.FraseMotivacional);
    yield repository.save(fraseMotivacional);
});
exports.insertarFrase = insertarFrase;
const listarFrase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.default.isInitialized) {
        yield appdatasource_1.default.initialize();
    }
    const repository = appdatasource_1.default.getRepository(fraseMotivacional_1.FraseMotivacional);
    const frases = yield repository.find();
    if (frases.length === 0)
        return null;
    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex];
});
exports.listarFrase = listarFrase;
//# sourceMappingURL=frase.service.js.map