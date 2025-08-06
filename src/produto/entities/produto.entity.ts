import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Categoria} from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Exclude } from 'class-transformer';


@Entity({ name: 'tb_produtos' })
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @Column({ length: 255, nullable: false })
    descricao: string;

    @Column('decimal', {precision: 10, scale: 2, nullable: false})
    preco: number;

    @Exclude()
    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produtos, { eager: true })
    usuario: Usuario;
}