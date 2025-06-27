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
exports.FrecuenciaHabito = void 0;
const typeorm_1 = require("typeorm");
const habito_1 = require("./habito");
let FrecuenciaHabito = class FrecuenciaHabito {
};
exports.FrecuenciaHabito = FrecuenciaHabito;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_frecuencia' }),
    __metadata("design:type", Number)
], FrecuenciaHabito.prototype, "idFrecuencia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => habito_1.Habito, (habito) => habito.idHabito),
    (0, typeorm_1.JoinColumn)({ name: 'id_habito' }),
    __metadata("design:type", habito_1.Habito)
], FrecuenciaHabito.prototype, "habito", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dia_semana', type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], FrecuenciaHabito.prototype, "diaSemana", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion', type: 'datetime' }),
    __metadata("design:type", Date)
], FrecuenciaHabito.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria', type: 'bit', default: 1 }),
    __metadata("design:type", Boolean)
], FrecuenciaHabito.prototype, "estado", void 0);
exports.FrecuenciaHabito = FrecuenciaHabito = __decorate([
    (0, typeorm_1.Entity)('FrecuenciaHabitos')
], FrecuenciaHabito);
//# sourceMappingURL=frecuenciaHabito.js.map