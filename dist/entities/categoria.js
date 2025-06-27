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
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
let Categoria = class Categoria {
};
exports.Categoria = Categoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_categoria' }),
    __metadata("design:type", Number)
], Categoria.prototype, "idCategoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion', type: 'datetime' }),
    __metadata("design:type", Date)
], Categoria.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria', type: 'bit', default: 1 }),
    __metadata("design:type", Boolean)
], Categoria.prototype, "estado", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)('Categorias')
], Categoria);
//# sourceMappingURL=categoria.js.map