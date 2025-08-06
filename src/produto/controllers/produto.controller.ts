import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";

@Controller('/produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async listarTodos(): Promise<Produto[]> {
        return await this.produtoService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async buscarPorId(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
        return await this.produtoService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async criar(@Body() produto: Produto): Promise<any> {
        const produtoCriado = await this.produtoService.create(produto);
        return {
            mensagem: 'Produto criado com sucesso!',
            produto: produtoCriado
        };
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async atualizar(@Body() produto: Produto): Promise<any> {
        const produtoAtualizado = await this.produtoService.update(produto);
        return {
            mensagem: 'Produto atualizado com sucesso!',
            produto: produtoAtualizado
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletar(@Param('id', ParseIntPipe) id: number) {
        await this.produtoService.delete(id);
        return {
            mensagem: 'Produto removido com sucesso!'
        };
    }
}
