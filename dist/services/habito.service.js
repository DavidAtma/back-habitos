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
exports.obtenerHabitoPorId = exports.activarHabito = exports.eliminarHabito = exports.actualizarHabito = exports.listarHabitosPorUsuario = exports.listarHabitos = exports.listarHabitosActivos = exports.insertarHabito = void 0;
const appdatasource_1 = require("../config/appdatasource");
const habito_1 = require("../entities/habito");
// Insertar hábito y devolver el objeto con ID generado
const insertarHabito = (habito) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    if (habito.categoria && habito.categoria.idCategoria) {
        habito.categoria = { idCategoria: habito.categoria.idCategoria };
    }
    if (habito.usuario && habito.usuario.idUsuario) {
        habito.usuario = { idUsuario: habito.usuario.idUsuario };
    }
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
    var _a, _b, _c;
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    const habito = yield repository.findOne({ where: { idHabito } });
    if (!habito) {
        throw new Error('Hábito no encontrado');
    }
    //Mapear los campos que vienen del body:
    habito.nombre = (_a = data.nombre) !== null && _a !== void 0 ? _a : habito.nombre;
    habito.descripcion = (_b = data.descripcion) !== null && _b !== void 0 ? _b : habito.descripcion;
    habito.horaSugerida = (_c = data.horaSugerida) !== null && _c !== void 0 ? _c : habito.horaSugerida;
    //AQUÍ: Mapear idCategoria correctamente:
    if (data.categoria && data.categoria.idCategoria) {
        habito.categoria = { idCategoria: data.categoria.idCategoria };
    }
    yield repository.save(habito);
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
// Obtener un hábito por ID
const obtenerHabitoPorId = (idHabito) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = appdatasource_1.AppDataSource.getRepository(habito_1.Habito);
    return yield repository.findOne({
        where: { idHabito },
        relations: ["usuario", "categoria"] // Si usas relaciones
    });
});
exports.obtenerHabitoPorId = obtenerHabitoPorId;
//# sourceMappingURL=habito.service.js.map