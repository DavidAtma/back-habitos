import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Rol } from "./rol";

@Entity('Usuarios')
export class Usuario {

    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    idUsuario: number;
    @ManyToOne(() => Rol, (rol) => rol.idRol)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol
    @Column({ name: 'nombre', type: 'varchar', length: 250 })
    nombre: string;
    @Column({ name: 'apellido_paterno', type: 'varchar', length: 250 })
    apellidoPaterno: string;
    @Column({ name: 'apellido_materno', type: 'varchar', length: 250 })
    apellidoMaterno: string;
    @Column({ name: 'correo', type: 'varchar', length: 100, unique: true })
    correo: string;
    @Column({ name: 'contrasena', type: 'varchar', length: 256 })
    contrasena: string;
    @Column({ name: 'foto_perfil', type: 'varchar', length: 1000 })
    fotoPerfil: string;
    @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
    estado: boolean;
    
}
