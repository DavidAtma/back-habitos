import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('FrasesMotivacionales')
export class FraseMotivacional {

    @PrimaryGeneratedColumn({ name: 'id_frase' })
    idFrase: number;
    @Column({ name: 'frase', type: 'varchar', length: 250 })
    frase: string;
    @Column({ name: 'autor', type: 'varchar', length: 250 })
    autor: string;
    @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
    estado: boolean;

}

