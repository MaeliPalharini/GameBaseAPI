import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./entities/categoria.entity";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";
import { Produto } from "../produto/entities/produto.entity";
import { ProdutoModule } from "../produto/produto.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Categoria, Produto]),
        ProdutoModule
    ],
    providers: [CategoriaService],
    controllers: [CategoriaController],
    exports: [CategoriaService]
})
export class CategoriaModule {}

