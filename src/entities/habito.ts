import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Categoria } from "./categoria";

@Entity ('Habito')
 export class Habito {
    @PrimaryGeneratedColumn({name:'id_habito'})
    idHabito: number;

    @ManyToOne(()=>Usuario, (usuario)=> usuario.idUsuario)
    @JoinColumn({name:'id_usuario'})
    usuario: Usuario;

    @ManyToOne(()=>Categoria, (categoria)=> categoria.idCategoria)
    @JoinColumn({name:'id_categoria'})
    categoria: Categoria; 


    
    @Column({name:'nombre'})
    nombre: string;
    @Column({name:'descripcion'})
    descripcion: string;
    @Column({name:'hora_sugerida'})
    horaSugerida: string;
    @Column({name:'tipo'})
    tipo:string;
    @Column({name:'fecha_creacion'})
    fechaCreacion: Date;
    @Column({name:'estado'})
    estado: boolean;
 }