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
exports.activarRol = exports.eliminarRol = exports.actualizarRol = exports.listarRoles = exports.listarRolesActivos = exports.insertarRol = void 0;
const appdatasource_1 = require("../config/appdatasource");
const rol_1 = require("../entities/rol");
// Insertar rol
const insertarRol = (rol) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(rol_1.Rol);
    return yield repository.save(rol);
});
exports.insertarRol = insertarRol;
// Listar todos los roles activos
const listarRolesActivos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(rol_1.Rol);
    return yield repository.find({
        where: { estado: true },
        order: { idRol: "DESC" }
    });
});
exports.listarRolesActivos = listarRolesActivos;
// Listar todos los roles
const listarRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(rol_1.Rol);
    return yield repository.find({
        order: { idRol: "DESC" }
    });
});
exports.listarRoles = listarRoles;
// Actualizar rol
const actualizarRol = (idRol, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(rol_1.Rol);
    yield repository.update({ idRol }, data);
});
exports.actualizarRol = actualizarRol;
// Eliminar rol
const eliminarRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(rol_1.Rol);
    yield repository.update({ idRol }, { estado: false });
});
exports.eliminarRol = eliminarRol;
// Activar rol
const activarRol = (idRol) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(rol_1.Rol);
    yield repository.update({ idRol }, { estado: true });
});
exports.activarRol = activarRol;
//# sourceMappingURL=rol.service.js.map