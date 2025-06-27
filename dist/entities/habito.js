"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habito = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("./usuario");
const categoria_1 = require("./categoria");
let Habito = class Habito {
};
exports.Habito = Habito;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_habito' }),
    __metadata("design:type", Number)
], Habito.prototype, "idHabito", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.Usuario, (usuario) => usuario.idUsuario),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", usuario_1.Usuario)
], Habito.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_1.Categoria, (categoria) => categoria.idCategoria),
    (0, typeorm_1.JoinColumn)({ name: 'id_categoria' }),
    __metadata("design:type", categoria_1.Categoria)
], Habito.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], Habito.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descripcion', type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], Habito.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hora_sugerida', type: 'time' }),
    __metadata("design:type", String)
], Habito.prototype, "horaSugerida", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion', type: 'datetime' }),
    __metadata("design:type", Date)
], Habito.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria', type: 'bit', default: 1 }),
    __metadata("design:type", Boolean)
], Habito.prototype, "estado", void 0);
exports.Habito = Habito = __decorate([
    (0, typeorm_1.Entity)('Habitos')
], Habito);
//# sourceMappingURL=habito.js.map