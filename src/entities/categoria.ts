import { Column, PrimaryGeneratedColumn } from "typeorm";


export class Categoria {
    
    @PrimaryGeneratedColumn({name:'id_categoria'})
    idCategoria:number;

    @Column({name:'nombre'})
        nombre: string;
    @Column({name:'descripcion'})
        descripcion: string;
    @Column({name:'fecha_creacion'})
        fechaCreacion: Date;
    @Column({name:'estado'})
        estado: boolean;

}