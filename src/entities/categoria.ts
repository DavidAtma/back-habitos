import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Categorias')
export class Categoria {

    @PrimaryGeneratedColumn({ name: 'id_categoria' })
    idCategoria: number;
    @Column({ name: 'nombre', type: 'varchar', length: 250 })
    nombre: string;
    @CreateDateColumn({ name: 'fecha_creacion', type: 'datetime' })
    fechaCreacion: Date;
    @Column({ name: 'estado_auditoria', type: 'bit', default: 1 })
    estado: boolean;

}