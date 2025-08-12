
# API de Agendamento de Barbearia

API RESTful para gerenciar usuários, serviços e agendamentos de uma barbearia. Desenvolvida com Node.js, Express e Sequelize.

## Features

- Autenticação de usuários baseada em JWT (JSON Web Token).
- Sistema de papéis (usuário comum vs. administrador).
- CRUD completo para gerenciamento de Usuários (protegido para admins).
- CRUD completo para gerenciamento de Serviços.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Um banco de dados [MySQL] => barbearia_db 

## Instalação

1.  Clone o repositório:
    ```bash
    git clone (https://github.com/MarcioAlex-x/barber-backend.git)
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Configure as variáveis no arquivo `.env` com suas credenciais do banco de dados, segredo do JWT, etc.

# Arquivo: .env.example

# Configuração da Aplicação
PORT=3000

# Configuração do Banco de Dados (exemplo para PostgreSQL)
DB_NAME=barbearia_db
DB_USER=root
DB_PASS=root
DB_HOST=localhost
PORT=3000

# Configurações de JWT - Autenticação e Autorização

JWT_SECRET=7b8be5abae2ec198f74f423435ac25d3ec0d10fded7c469da7002be0d8c99e344cb85fd82e73c8cc07a65cb3e9c0cf5818eb830556b150ce0f5e1095820ea32b

## Rodando a Aplicação

# Modo de Desenvolvimento (com hot-reload, se tiver o nodemon)
```
    Instale o nodemon
```
npm run dev

# Modo de Produção
npm start

## Endpoints da API

### Autenticação

| Método | Endpoint      | Descrição                 | Proteção |
| :----- | :------------ | :------------------------ | :------- |
| `POST` | `/login`  | Autentica um usuário e retorna um token. | Pública  |
| `POST` | `/logout` | Invalida o token no lado do cliente. | Pública  |

### Usuários (Users)

| Método   | Endpoint        | Descrição                    | Proteção       |
| :------- | :-------------- | :--------------------------- | :------------- |
| `POST`   | `/users`    | Cria um novo usuário (registro). | **Admin**        |
| `GET`    | `/users`    | Lista todos os usuários.     | **Admin** |
| `GET`    | `/users/:id`| Obtém um usuário específico. | **Admin** |
| `PUT`    | `/users/:id`| Atualiza um usuário.         | **Admin** |
| `DELETE` | `/users/:id`| Deleta um usuário.           | **Admin** |

### Serviços (Services)

| Método   | Endpoint           | Descrição                   | Proteção       |
| :------- | :----------------- | :-------------------------- | :------------- |
| `POST`   | `/api/services`    | Cria um novo serviço.       | **Admin** |
| `GET`    | `/api/services`    | Lista todos os serviços.    | Pública        |
| `GET`    | `/api/services/:id`| Obtém um serviço específico. | Pública        |
| `PUT`    | `/api/services/:id`| Atualiza um serviço.        | **Admin** |
| `DELETE` | `/api/services/:id`| Deleta um serviço.          | **Admin** |


