import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habito } from "./habito";

@Entity('Seguimiento')
export class Seguimiento{

    @PrimaryGeneratedColumn({name:'id_seguimiento'})
    
    idFrecuencia: number;

     @ManyToOne(()=>Habito, (habito)=> habito.idHabito)
     @JoinColumn({name:'id_habito'})
        habito:Habito
        
@Column({ name: 'fecha'})
    fecha: Date;
@Column({ name: 'completado'})
    completado: boolean;
@Column({ name: 'nota_dia'})
    notaDia: string;
    @Column({ name: 'fecha_registro'})
    fechaRegistro: Date;
    @Column({ name: 'fecha_creacion'})
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria'})
    estado: boolean;
}