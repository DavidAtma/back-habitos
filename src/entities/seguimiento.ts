import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habito } from "./habito";

@Entity('Seguimientos')
export class Seguimiento {

    @PrimaryGeneratedColumn({ name: 'id_seguimiento' })
    idSeguimiento: number;
    @ManyToOne(() => Habito, (habito) => habito.idHabito)
    @JoinColumn({ name: 'id_habito' })
    habito: Habito
    @Column({ name: 'fecha', type: 'date' })
    fecha: Date;
    @Column({ name: 'completado' })
    completado: boolean;
    @Column({ name: 'nota_dia', type: 'varchar', length: 250 })
    notaDia: string;
    @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
    estado: boolean;

}