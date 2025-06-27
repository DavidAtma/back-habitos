"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.activarUsuario = exports.eliminarUsuario = exports.actualizarUsuario = exports.listarUsuarios = exports.listarUsuariosActivos = exports.insertarUsuario = void 0;
const appdatasource_1 = require("../config/appdatasource");
const usuario_1 = require("../entities/usuario");
const bcrypt = __importStar(require("bcryptjs"));
// Insertar usuario
const insertarUsuario = (usuario) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(usuario_1.Usuario);
    // Hashear la contraseña si existe
    if (usuario.contrasena) {
        usuario.contrasena = yield bcrypt.hash(usuario.contrasena, 10);
    }
    return yield repository.save(usuario);
});
exports.insertarUsuario = insertarUsuario;
// Listar todos los usuarios activos
const listarUsuariosActivos = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(usuario_1.Usuario);
    return yield repository.find({
        relations: ['rol'],
        where: { estado: true },
        order: { idUsuario: "DESC" }
    });
});
exports.listarUsuariosActivos = listarUsuariosActivos;
// Listar todos los usuarios
const listarUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(usuario_1.Usuario);
    return yield repository.find({
        relations: ['rol'],
        order: { idUsuario: "DESC" }
    });
});
exports.listarUsuarios = listarUsuarios;
// Buscar usuario por correo
/*export const buscarUsuarioPorCorreo = async (correo: string): Promise<Usuario | null> => {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize();
    }

    const repository = AppDataSource.getRepository(Usuario);
    return await repository.findOne({
        where: {
            correo: correo.trim().toLowerCase(),
            estado: true
        },
        relations: ['rol']
    });
};*/
// Actualizar usuario
const actualizarUsuario = (idUsuario, data) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(usuario_1.Usuario);
    // Hashear la nueva contraseña si está presente
    if (data.contrasena) {
        data.contrasena = yield bcrypt.hash(data.contrasena, 10);
    }
    yield repository.update({ idUsuario }, data);
});
exports.actualizarUsuario = actualizarUsuario;
// Eliminar usuario
const eliminarUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(usuario_1.Usuario);
    yield repository.update({ idUsuario }, { estado: false });
});
exports.eliminarUsuario = eliminarUsuario;
// Activar usuario
const activarUsuario = (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
    if (!appdatasource_1.AppDataSource.isInitialized) {
        yield appdatasource_1.AppDataSource.initialize();
    }
    const repository = appdatasource_1.AppDataSource.getRepository(usuario_1.Usuario);
    yield repository.update({ idUsuario }, { estado: true });
});
exports.activarUsuario = activarUsuario;
//# sourceMappingURL=usuario.service.js.map