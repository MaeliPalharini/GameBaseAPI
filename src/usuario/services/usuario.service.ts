import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) {}

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOneBy({ id });

        if (!usuario) {
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
        }

        return usuario;
    }

    async create(usuario: Usuario): Promise<Usuario> {
        const existe = await this.usuarioRepository.findOneBy({ email: usuario.email });

        if (existe) {
            throw new HttpException('E-mail já cadastrado', HttpStatus.BAD_REQUEST);
        }

        return await this.usuarioRepository.save(usuario);
    }

    async update(usuario: Usuario): Promise<Usuario> {
        await this.findById(usuario.id);
        return await this.usuarioRepository.save(usuario);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);
        return await this.usuarioRepository.delete(id);
    }
}
