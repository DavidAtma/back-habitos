import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habito } from "./habito";

@Entity('FrecuenciaHabitos')
export class FrecuenciaHabito {

    @PrimaryGeneratedColumn({ name: 'id_frecuencia' })
    idFrecuencia: number;
    @ManyToOne(() => Habito, (habito) => habito.idHabito)
    @JoinColumn({ name: 'id_habito' })
    habito: Habito
    @Column({ name: 'dia_semana', type: 'varchar', length: 20 })
    diaSemana: string;
    @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
    estado: boolean;

}