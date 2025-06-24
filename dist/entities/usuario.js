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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const rol_1 = require("./rol");
let Usuario = class Usuario {
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_usuario' }),
    __metadata("design:type", Number)
], Usuario.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_1.Rol, (rol) => rol.idRol),
    (0, typeorm_1.JoinColumn)({ name: 'id_rol' }),
    __metadata("design:type", rol_1.Rol)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre' }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido_paterno' }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'apellido_materno' }),
    __metadata("design:type", String)
], Usuario.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'correo' }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contrasena' }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_nacimiento' }),
    __metadata("design:type", String)
], Usuario.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'foto_perfil' }),
    __metadata("design:type", String)
], Usuario.prototype, "fotoPerfil", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Usuario.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria' }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "estado", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('Usuario')
], Usuario);
//# sourceMappingURL=usuario.js.map