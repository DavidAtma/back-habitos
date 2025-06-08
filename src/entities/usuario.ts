import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
 import { Rol } from "./rol";

    
@Entity('Usuario')
export class Usuario{

    @PrimaryGeneratedColumn({name:'id_usuario'})
    
    idUsuario: number;

     @ManyToOne(()=>Rol, (rol)=> rol.idRol)
     @JoinColumn({name:'id_rol'})
        rol:Rol
        
@Column({ name: 'nombre'})
    nombre: string;
@Column({ name: 'apellido_paterno'})
    apellidoPaterno: string;
@Column({ name: 'apellido_materno'})
    apellidoMaterno: string;
@Column({ name: 'correo'})
    correo:string ;
@Column({ name: 'contraseña'})
    contrasena: string;
@Column({ name: 'fecha_nacimiento'})
    fechaNacimiento: string;
@Column({ name: 'foto_perfil'})
    fotoPerfil: string;
@Column({ name: 'fecha_creacion'})
    fechaCreacion: Date;
@Column({ name: 'estado_auditoria'})
    estado: boolean;


}