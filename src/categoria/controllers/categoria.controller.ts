import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from '../entities/categoria.entity';
import { CategoriaService } from '../services/categoria.service';
import { Produto } from "../../produto/entities/produto.entity";


@Controller('/categorias')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async listarTodas(): Promise<Categoria[]> {
        return await this.categoriaService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async buscarPorId(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return await this.categoriaService.findById(id);
    }

    @Get(':id/produtos')
    @HttpCode(HttpStatus.OK)
    async listarProdutosPorCategoria(@Param('id', ParseIntPipe) id: number): Promise<Produto[]> {
        return await this.categoriaService.listarProdutosPorCategoria(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async criar(@Body() categoria: Categoria): Promise<any> {
        const categoriaCriada = await this.categoriaService.create(categoria);
        return {
            mensagem: 'Categoria criada com sucesso!',
            categoria: categoriaCriada
        };
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async atualizar(@Body() categoria: Categoria): Promise<any> {
        const categoriaAtualizada = await this.categoriaService.update(categoria);
        return {
            mensagem: 'Categoria atualizada com sucesso!',
            categoria: categoriaAtualizada
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletar(@Param('id', ParseIntPipe) id: number) {
        await this.categoriaService.delete(id);
        return {
            mensagem: 'Categoria removida com sucesso!'
        };
    }
}

