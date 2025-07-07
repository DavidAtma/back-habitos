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
exports.activarSeguimiento = exports.eliminarSeguimiento = exports.actualizarSeguimiento = exports.listarSeguimientosPorUsuarioYFecha = exports.listarSeguimientosPorUsuario = exports.listarSeguimientosPorHabito = exports.listarSeguimientos = exports.listarSeguimientosActivos = exports.insertarSeguimiento = void 0;
const appdatasource_1 = require("../config/appdatasource");
const seguimiento_1 = require("../entities/seguimiento");
const typeorm_1 = require("typeorm"); // Importar Between
// Insertar seguimiento
const insertarSeguimiento = (seguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.save(seguimiento);
});
exports.insertarSeguimiento = insertarSeguimiento;
// Listar todos los seguimientos activos
const listarSeguimientosActivos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        relations: ['habito'],
        where: { estado: true },
        order: { idSeguimiento: "DESC" }
    });
});
exports.listarSeguimientosActivos = listarSeguimientosActivos;
// Listar todos los seguimientos
const listarSeguimientos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        relations: ['habito'],
        order: { idSeguimiento: "DESC" }
    });
});
exports.listarSeguimientos = listarSeguimientos;
// Listar seguimientos por hábito
const listarSeguimientosPorHabito = (idHabito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        where: { habito: { idHabito }, estado: true },
        relations: ['habito'],
        order: { fecha: "DESC" }
    });
});
exports.listarSeguimientosPorHabito = listarSeguimientosPorHabito;
// Listar seguimientos por usuario
const listarSeguimientosPorUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        where: { habito: { usuario: { idUsuario }, estado: true } },
        relations: ['habito', 'habito.usuario'],
        order: { fecha: "DESC" }
    });
});
exports.listarSeguimientosPorUsuario = listarSeguimientosPorUsuario;
// Listar seguimientos por usuario y fecha
const listarSeguimientosPorUsuarioYFecha = (idUsuario, fecha) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    const startOfDay = new Date(fecha);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(fecha);
    endOfDay.setHours(23, 59, 59, 999);
    return yield repository.find({
        where: {
            habito: { usuario: { idUsuario }, estado: true },
            fecha: (0, typeorm_1.Between)(startOfDay, endOfDay)
        },
        relations: ['habito', 'habito.usuario'],
        order: { fecha: "ASC" }
    });
});
exports.listarSeguimientosPorUsuarioYFecha = listarSeguimientosPorUsuarioYFecha;
// Actualizar seguimiento
const actualizarSeguimiento = (idSeguimiento, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    yield repository.update({ idSeguimiento: idSeguimiento }, data);
});
exports.actualizarSeguimiento = actualizarSeguimiento;
// Eliminar seguimiento
const eliminarSeguimiento = (idSeguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    yield repository.update({ idSeguimiento }, { estado: false });
});
exports.eliminarSeguimiento = eliminarSeguimiento;
// Activar seguimiento
const activarSeguimiento = (idSeguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    yield repository.update({ idSeguimiento }, { estado: true });
});
exports.activarSeguimiento = activarSeguimiento;
//# sourceMappingURL=seguimiento.service.js.map