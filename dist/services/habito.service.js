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
exports.activarHabito = exports.eliminarHabito = exports.actualizarHabito = exports.listarHabitosPorUsuario = exports.listarHabitos = exports.listarHabitosActivos = exports.insertarHabito = void 0;
const appdatasource_1 = require("../config/appdatasource");
const habito_1 = require("../entities/habito");
// Insertar hábito y devolver el objeto con ID generado
const insertarHabito = (habito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    const nuevoHabito = yield repository.save(habito);
    return nuevoHabito;
});
exports.insertarHabito = insertarHabito;
// Listar todos los hábitos activos
const listarHabitosActivos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    return yield repository.find({
        relations: ['usuario', 'categoria'],
        where: { estado: true },
        order: { idHabito: "DESC" }
    });
});
exports.listarHabitosActivos = listarHabitosActivos;
// Listar todos los hábitos
const listarHabitos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    return yield repository.find({
        relations: ['usuario', 'categoria'],
        order: { idHabito: "DESC" }
    });
});
exports.listarHabitos = listarHabitos;
// Listar hábitos por usuario
const listarHabitosPorUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    return yield repository.find({
        where: { usuario: { idUsuario }, estado: true },
        relations: ['usuario', 'categoria'],
        order: { idHabito: "DESC" }
    });
});
exports.listarHabitosPorUsuario = listarHabitosPorUsuario;
// Actualizar hábito
const actualizarHabito = (idHabito, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    yield repository.update({ idHabito }, data);
});
exports.actualizarHabito = actualizarHabito;
// Eliminar hábito
const eliminarHabito = (idHabito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    yield repository.update({ idHabito }, { estado: false });
});
exports.eliminarHabito = eliminarHabito;
// Activar hábito
const activarHabito = (idHabito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    yield repository.update({ idHabito }, { estado: true });
});
exports.activarHabito = activarHabito;
//# sourceMappingURL=habito.service.js.map