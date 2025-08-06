import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    async listarTodos(): Promise<Usuario[]> {
        return await this.usuarioService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async buscarPorId(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
        return await this.usuarioService.findById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async criar(@Body() usuario: Usuario): Promise<any> {
        const usuarioCriado = await this.usuarioService.create(usuario);
        return {
            mensagem: 'Usuário criado com sucesso!',
            usuario: usuarioCriado
        };
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    async atualizar(@Body() usuario: Usuario): Promise<any> {
        const usuarioAtualizado = await this.usuarioService.update(usuario);
        return {
            mensagem: 'Usuário atualizado com sucesso!',
            usuario: usuarioAtualizado
        };
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async deletar(@Param('id', ParseIntPipe) id: number) {
        await this.usuarioService.delete(id);
        return {
            mensagem: 'Usuário removido com sucesso!'
        };
    }
}
