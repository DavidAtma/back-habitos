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
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const habito_route_1 = __importDefault(require("./routes/habito.route"));
const categoria_route_1 = __importDefault(require("./routes/categoria.route"));
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const rol_route_1 = __importDefault(require("./routes/rol.route"));
const frecuencia_route_1 = __importDefault(require("./routes/frecuencia.route"));
const recordatorio_route_1 = __importDefault(require("./routes/recordatorio.route"));
const frase_route_1 = __importDefault(require("./routes/frase.route"));
const seguimiento_route_1 = __importDefault(require("./routes/seguimiento.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const appdatasource_1 = require("./config/appdatasource");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/habitos', habito_route_1.default);
app.use('/api/v1/categorias', categoria_route_1.default);
app.use('/api/v1/usuarios', usuario_route_1.default);
app.use('/api/v1/roles', rol_route_1.default);
app.use('/api/v1/frecuencias', frecuencia_route_1.default);
app.use('/api/v1/recordatorios', recordatorio_route_1.default);
app.use('/api/v1/frases', frase_route_1.default);
app.use('/api/v1/auth', auth_route_1.default);
app.use('/api/v1/seguimientos', seguimiento_route_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield appdatasource_1.AppDataSource.initialize();
        console.log('Conectado a la BD');
    }
    catch (error) {
        console.error('Error al conectar a la BD', error);
    }
});
exports.startServer = startServer;
exports.default = app;
//# sourceMappingURL=app.js.map