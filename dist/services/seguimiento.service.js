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
exports.activarSeguimiento = exports.eliminarSeguimiento = exports.actualizarSeguimiento = exports.listarSeguimientosCompletadosPorUsuario = exports.listarSeguimientosPorUsuarioYFecha = exports.listarSeguimientosPorHabito = exports.listarSeguimientos = exports.listarSeguimientosActivos = exports.insertarSeguimiento = void 0;
const appdatasource_1 = require("../config/appdatasource");
const seguimiento_1 = require("../entities/seguimiento");
const ensureDataSourceInitialized = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
});
const insertarSeguimiento = (seguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.save(seguimiento);
});
exports.insertarSeguimiento = insertarSeguimiento;
const listarSeguimientosActivos = () => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        relations: ['habito', 'usuario'],
        where: { estado: true },
        order: { idSeguimiento: "DESC" }
    });
});
exports.listarSeguimientosActivos = listarSeguimientosActivos;
const listarSeguimientos = () => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        relations: ['habito', 'usuario'],
        order: { idSeguimiento: "DESC" }
    });
});
exports.listarSeguimientos = listarSeguimientos;
const listarSeguimientosPorHabito = (idHabito) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    return yield repository.find({
        where: { habito: { idHabito }, estado: true },
        relations: ['habito', 'usuario'],
        order: { fecha: "DESC" }
    });
});
exports.listarSeguimientosPorHabito = listarSeguimientosPorHabito;
const listarSeguimientosPorUsuarioYFecha = (idUsuario, fecha) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    try {
        const seguimientos = yield repository
            .createQueryBuilder("seguimiento")
            .leftJoinAndSelect("seguimiento.habito", "habito")
            .leftJoinAndSelect("seguimiento.usuario", "usuario")
            .where("seguimiento.usuario.idUsuario = :idUsuario", { idUsuario })
            .andWhere("CAST(seguimiento.fecha AS DATE) = :fecha", { fecha }) // 👍 aquí puedes probar también DATE() o CONVERT() según tu motor
            .andWhere("seguimiento.estado_auditoria = :estado", { estado: 1 }) // ✅ ¡este era el error!
            .orderBy("seguimiento.fecha", "ASC")
            .getMany();
        return seguimientos;
    }
    catch (error) {
        console.error("Error al listar seguimientos por usuario y fecha:", error);
        return [];
    }
});
exports.listarSeguimientosPorUsuarioYFecha = listarSeguimientosPorUsuarioYFecha;
const listarSeguimientosCompletadosPorUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    const seguimientos = yield repository.find({
        where: {
            usuario: { idUsuario },
            completado: true,
            estado: true
        },
        relations: ["habito"]
    });
    return seguimientos;
});
exports.listarSeguimientosCompletadosPorUsuario = listarSeguimientosCompletadosPorUsuario;
const actualizarSeguimiento = (idSeguimiento, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    yield repository.update({ idSeguimiento }, data);
});
exports.actualizarSeguimiento = actualizarSeguimiento;
const eliminarSeguimiento = (idSeguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    yield repository.update({ idSeguimiento }, { estado: false });
});
exports.eliminarSeguimiento = eliminarSeguimiento;
const activarSeguimiento = (idSeguimiento) => __awaiter(void 0, void 0, void 0, function* () {
    yield ensureDataSourceInitialized();
    const repository = appdatasource_1.AppDataSource.getRepository(seguimiento_1.Seguimiento);
    yield repository.update({ idSeguimiento }, { estado: true });
});
exports.activarSeguimiento = activarSeguimiento;
//# sourceMappingURL=seguimiento.service.js.map