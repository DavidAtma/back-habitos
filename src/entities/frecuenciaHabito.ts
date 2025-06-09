import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habito } from "./habito";


@Entity('FrecuenciaHabito')
export class FrecuenciaHabito{

    @PrimaryGeneratedColumn({name:'id_frecuencia'})
    
    idFrecuencia: number;

     @ManyToOne(()=>Habito, (habito)=> habito.idHabito)
     @JoinColumn({name:'id_habito'})
        habito:Habito
        
@Column({ name: 'dia_semana'})
    diaSemana: string;
@Column({ name: 'fecha_creacion'})
    fechaCreacion: Date;
@Column({ name: 'estado_auditoria'})
    estado: boolean;
}