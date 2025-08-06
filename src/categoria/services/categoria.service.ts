import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, Repository } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";


@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,

        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            relations: {
                produtos: true,
            }
        });
    }

    async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id },
            relations: {
                produtos: true,
            }
        });

        if (!categoria) {
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
        }

        return categoria;
    }

    async listarProdutosPorCategoria(id: number): Promise<Produto[]> {
        const categoria = await this.categoriaRepository.findOne({
            where: { id },
        });

        if (!categoria) {
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
        }
        const produtos = await this.produtoRepository.find({
            where: {
                categoria: { id }
            },
            relations: {
                categoria: true,

            }
        });

        if (produtos.length === 0) {
            throw new HttpException('Nenhum produto encontrado para esta categoria', HttpStatus.NOT_FOUND);
        }
        return produtos;
    }

    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {
        await this.findById(categoria.id);
        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.categoriaRepository.delete(id);
    }
}
