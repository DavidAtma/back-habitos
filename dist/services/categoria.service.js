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
exports.activarCategoria = exports.eliminarCategoria = exports.actualizarCategoria = exports.listarCategorias = exports.listarCategoriasActivas = exports.insertarCategoria = void 0;
const appdatasource_1 = require("../config/appdatasource");
const categoria_1 = require("../entities/categoria");
// Insertar categoría
const insertarCategoria = (categoria) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(categoria_1.Categoria);
    return yield repository.save(categoria);
});
exports.insertarCategoria = insertarCategoria;
// Listar todas las categorías activas
const listarCategoriasActivas = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(categoria_1.Categoria);
    return yield repository.find({
        where: { estado: true },
        order: { idCategoria: "DESC" }
    });
});
exports.listarCategoriasActivas = listarCategoriasActivas;
// Listar todas las categorías
const listarCategorias = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(categoria_1.Categoria);
    return yield repository.find({
        order: { idCategoria: "DESC" }
    });
});
exports.listarCategorias = listarCategorias;
// Actualizar categoría
const actualizarCategoria = (idCategoria, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(categoria_1.Categoria);
    yield repository.update({ idCategoria }, data);
});
exports.actualizarCategoria = actualizarCategoria;
// Eliminar categoría
const eliminarCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(categoria_1.Categoria);
    yield repository.update({ idCategoria }, { estado: false });
});
exports.eliminarCategoria = eliminarCategoria;
// Activar categoría
const activarCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(categoria_1.Categoria);
    yield repository.update({ idCategoria }, { estado: true });
});
exports.activarCategoria = activarCategoria;
//# sourceMappingURL=categoria.service.js.map