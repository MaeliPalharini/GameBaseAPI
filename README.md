# 🎮 GameBase API

Este é o **Projeto GameBase** desenvolvido durante o bootcamp da [Generation Brasil](https://brazil.generation.org/), com foco em **NestJS**, **TypeORM** e **PostgreSQL**.

O objetivo é construir uma **API para gerenciamento de uma loja de games**, com relacionamento entre classes (`Usuário`, `Categoria`, `Produto`), aplicando boas práticas de modularização, validação e persistência de dados.

---

## 🚀 Tecnologias Utilizadas

- NestJS
- TypeORM
- MySQL
- TypeScript
- Node.js
- Insomnia
- npm

---

## 📁 Estrutura de Pastas

```bash
src/
│
├── categoria/
│   ├── controllers/
│   ├── entities/
│   ├── services/
│   └── categoria.module.ts
│
├── produto/
│   ├── controllers/
│   ├── entities/
│   ├── services/
│   └── produto.module.ts
│
├── usuario/
│   ├── controllers/
│   ├── entities/
│   ├── services/
│   └── usuario.module.ts
│
├── app.controller.ts
├── app.module.ts
├── app.service.ts
└── main.ts
```
## 🧩 Entidades Relacionadas
 - Usuário possui muitos produtos.
 - Categoria possui muitos produtos.
 - Produto pertence a uma categoria.

## ⚙️ Como rodar o projeto
 - Node.js instalado
 - MySQL rodando localmente
 - Banco de dados criado: db_gamebase

## Instalação
    npm install
## Execução
    npm run gamebase

## 🛠 Funcionalidades
- Buscar todos os produtos, categorias e usuários
- Buscar por ID
- Criar, editar e deletar
- Relacionar produto com categoria e usuário
- Validações com class-validator
- Modularização seguindo padrão NestJS

## 📝 Autor(a)
Desenvolvido por Maeli Palharini💚 

📚 Em transição de carreira para área de tecnologia
🎓 Engenharia Florestal • Análise e Desenvolvimento de Sistemas
