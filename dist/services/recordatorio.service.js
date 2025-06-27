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
exports.activarRecordatorio = exports.eliminarRecordatorio = exports.actualizarRecordatorio = exports.listarRecordatoriosPorHabito = exports.listarRecordatorios = exports.listarRecordatoriosActivos = exports.insertarRecordatorio = void 0;
const appdatasource_1 = require("../config/appdatasource");
const recordatorio_1 = require("../entities/recordatorio");
// Insertar recordatorio
const insertarRecordatorio = (recordatorio) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    return yield repository.save(recordatorio);
});
exports.insertarRecordatorio = insertarRecordatorio;
// Listar todos los recordatorios activos
const listarRecordatoriosActivos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    return yield repository.find({
        relations: ['habito'],
        where: { estado: true },
        order: { idRecordatorio: "DESC" }
    });
});
exports.listarRecordatoriosActivos = listarRecordatoriosActivos;
// Listar todos los recordatorios
const listarRecordatorios = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    return yield repository.find({
        relations: ['habito'],
        order: { idRecordatorio: "DESC" }
    });
});
exports.listarRecordatorios = listarRecordatorios;
// Listar recordatorios por hábito
const listarRecordatoriosPorHabito = (idHabito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    return yield repository.find({
        where: { habito: { idHabito }, estado: true },
        relations: ['habito'],
        order: { idRecordatorio: "DESC" }
    });
});
exports.listarRecordatoriosPorHabito = listarRecordatoriosPorHabito;
// Actualizar recordatorio
const actualizarRecordatorio = (idRecordatorio, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    yield repository.update({ idRecordatorio }, data);
});
exports.actualizarRecordatorio = actualizarRecordatorio;
// Eliminar recordatorio
const eliminarRecordatorio = (idRecordatorio) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    yield repository.update({ idRecordatorio }, { estado: false });
});
exports.eliminarRecordatorio = eliminarRecordatorio;
// Activar recordatorio
const activarRecordatorio = (idRecordatorio) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(recordatorio_1.Recordatorio);
    yield repository.update({ idRecordatorio }, { estado: true });
});
exports.activarRecordatorio = activarRecordatorio;
//# sourceMappingURL=recordatorio.service.js.map