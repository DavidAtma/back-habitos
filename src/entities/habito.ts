import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity ('Habito')
 export class Habito {
    @PrimaryGeneratedColumn({name:'id_habito'})
    idHabito: number;

    @ManyToOne(()=>Usuario, (usuario)=> usuario.idUsuario)
    @JoinColumn({name:'id_usuario'})
    usuario: Usuario;

    // @Column({name:'id_categoria'})
    // categoria: Categoria; 

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