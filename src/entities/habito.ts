import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Categoria } from "./categoria";

@Entity('Habitos')
export class Habito {

   @PrimaryGeneratedColumn({ name: 'id_habito' })
   idHabito: number;
   @ManyToOne(() => Usuario, (usuario) => usuario.idUsuario)
   @JoinColumn({ name: 'id_usuario' })
   usuario: Usuario;
   @ManyToOne(() => Categoria, (categoria) => categoria.idCategoria)
   @JoinColumn({ name: 'id_categoria' })
   categoria: Categoria;
   @Column({ name: 'nombre', type: 'varchar', length: 250 })
   nombre: string;
   @Column({ name: 'descripcion', type: 'varchar', length: 250 })
   descripcion: string;
   @Column({ name: 'hora_sugerida', type: 'time' })
   horaSugerida: string;
   @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
   fechaCreacion: Date;
   @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
   estado: boolean;

}