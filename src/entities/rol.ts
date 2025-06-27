import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Rol {

        @PrimaryGeneratedColumn({ name: 'id_rol' })
        idRol: number;
        @Column({ name: 'nombre', type: 'varchar', length: 250, unique: true })
        nombre: string;
        @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
        fechaCreacion: Date;
        @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
        estado: boolean;

}
