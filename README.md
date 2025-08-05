# 🎮 GameBaseAPI
Este é o Projeto Loja de Games desenvolvido durante o bootcamp da Generation Brasil, 
com foco em NestJS, TypeORM e mySQL.

O objetivo é desenvolver uma API para gerenciamento de uma loja de games, permitindo
o cadastro, atualização, listagem e remoção de produtos e categorias, implementando 
relacionamento entre as classes e aplicando boas práticas de modularização, organização 
do código e persistência de dados com MySQL.

## Escopo do Projeto
CRUD completo de Categorias

CRUD completo de Produtos

Relacionamento One to Many: uma categoria possui vários produtos

Integração com banco de dados relacional via TypeORM

Organização modular seguindo boas práticas do NestJS

## Tecnologias Utilizadas
- NestJS

- Node.js

- TypeORM

- Banco de Dados: MySQL

- Insomnia (para testar a API)

## Endpoints Principais

Categorias

    GET /categorias – Listar todas as categorias
    
    GET /categorias/:id – Buscar categoria por ID
    
    POST /categorias – Criar categoria
    
    PUT /categorias – Atualizar categoria
    
    DELETE /categorias/:id – Remover categoria

Produtos

    GET /produtos – Listar todos os produtos
    
    GET /produtos/:id – Buscar produto por ID
    
    POST /produtos – Criar produto
    
    PUT /produtos – Atualizar produto
    
    DELETE /produtos/:id – Remover produto