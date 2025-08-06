import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@Entity({ name: 'tb_usuarios' })
export class  Usuario{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @Column({ length: 150, nullable: false, unique: true })
    email: string;

    @Column({ length: 100, nullable: false })
    senha: string;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produtos: Produto[];
}
