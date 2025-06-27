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
exports.FraseMotivacional = void 0;
const typeorm_1 = require("typeorm");
let FraseMotivacional = class FraseMotivacional {
};
exports.FraseMotivacional = FraseMotivacional;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_frase' }),
    __metadata("design:type", Number)
], FraseMotivacional.prototype, "idFrase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'frase', type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], FraseMotivacional.prototype, "frase", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'autor', type: 'varchar', length: 250 }),
    __metadata("design:type", String)
], FraseMotivacional.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion', type: 'datetime' }),
    __metadata("design:type", Date)
], FraseMotivacional.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria', type: 'bit', default: 1 }),
    __metadata("design:type", Boolean)
], FraseMotivacional.prototype, "estado", void 0);
exports.FraseMotivacional = FraseMotivacional = __decorate([
    (0, typeorm_1.Entity)('FrasesMotivacionales')
], FraseMotivacional);
//# sourceMappingURL=fraseMotivacional.js.map