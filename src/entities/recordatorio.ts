import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habito } from "./habito";


@Entity('Recordatorio')
export class Recordatorio{

    @PrimaryGeneratedColumn({name:'id_recordatorio'})
    
    idRecordatorio: number;

     @ManyToOne(()=>Habito, (habito)=> habito.idHabito)
     @JoinColumn({name:'id_habito'})
        habito:Habito
        
@Column({ name: 'hora'})
    hora: string;
@Column({ name: 'mensaje'})
    mensaje: string;
    @Column({ name: 'fecha_creacion'})
    fechaCreacion: Date;
@Column({ name: 'estado_auditoria'})
    estado: boolean;
}