import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Rol')
export class Rol {

        @PrimaryGeneratedColumn({name:'id_rol'})
        idRol: number;

        @Column({name:'nombre'})
        nombre: string;

        @Column({ name: 'fecha_creacion'})
        estadoAuditoria: string;
        
        @Column({ name: 'estado_auditoria'})
        estado: string;

}