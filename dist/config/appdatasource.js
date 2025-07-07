"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const habito_1 = require("../entities/habito");
const categoria_1 = require("../entities/categoria");
const rol_1 = require("../entities/rol");
const usuario_1 = require("../entities/usuario");
const frecuenciaHabito_1 = require("../entities/frecuenciaHabito");
const recordatorio_1 = require("../entities/recordatorio");
const fraseMotivacional_1 = require("../entities/fraseMotivacional");
const seguimiento_1 = require("../entities/seguimiento");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mssql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 1433,
    username: process.env.DB_USERNAME || 'sa',
    password: process.env.DB_PASSWORD || '123',
    database: process.env.DB_NAME || 'MisHabitos',
    synchronize: false,
    logging: false,
    entities: [
        habito_1.Habito,
        categoria_1.Categoria,
        rol_1.Rol,
        usuario_1.Usuario,
        frecuenciaHabito_1.FrecuenciaHabito,
        recordatorio_1.Recordatorio,
        fraseMotivacional_1.FraseMotivacional,
        seguimiento_1.Seguimiento,
    ],
    extra: {
        options: {
            encrypt: false,
            enableArithAbort: true,
            trustServerCertificate: true,
        },
    },
});
exports.default = exports.AppDataSource;
//# sourceMappingURL=appdatasource.js.map