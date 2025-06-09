
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('FraseMotivacional')
export class FraseMotivacional {
     @PrimaryGeneratedColumn({name:'id_frase'})
    id_frase: number;
    @Column({name:'frase'})
    frase: string;
    @Column({name: 'autor'})
    autor: string;
    @Column({name:'fecha_creacion'})
    fechaCreacion: Date;
    @Column({name:'estado_auditoria'})
    estado: boolean;

}

