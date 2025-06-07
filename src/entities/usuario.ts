import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

    
@Entity('Usuario')
export class Usuario{

    @PrimaryGeneratedColumn({name:'id_usuario'})
    
    idUsuario: number;

    // idRol: Rol;
    @Column({name:'nombre'})
    nombre: string;
    @Column({name:'correo'})
    correo:string ;
    @Column({name:'contraseña'})
    contraseña: string;
    @Column({name:'foto_perfil'})
    fotoPerfil: string;
    @Column({name:'fecha_creacion'})
    fechaCreacion: Date;
    @Column({name:'estado'})
    estado: boolean;


}