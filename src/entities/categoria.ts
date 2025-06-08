import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ('Categoria')
export class Categoria {
    
    @PrimaryGeneratedColumn({name:'id_categoria'})
    idCategoria:number;

    @Column({name:'nombre'})
        nombre: string;
    @Column({name:'fecha_creacion'})
        fechaCreacion: Date;
    @Column({name:'estado_auditoria'})
        estado: boolean;

}