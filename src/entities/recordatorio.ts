import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Habito } from "./habito";

@Entity('Recordatorios')
export class Recordatorio {

    @PrimaryGeneratedColumn({ name: 'id_recordatorio' })
    idRecordatorio: number;
    @ManyToOne(() => Habito, (habito) => habito.idHabito)
    @JoinColumn({ name: 'id_habito' })
    habito: Habito
    @Column({ name: 'hora', type: 'time' })
    hora: string;
    @Column({ name: 'mensaje', type: 'varchar', length: 250 })
    mensaje: string;
    @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
    estado: boolean;

}