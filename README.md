# 🗂️ To-Do List API (Express + MongoDB)

API RESTful para gerenciamento de tarefas, com autenticação JWT, permissões de usuário e documentação interativa via Swagger.

## 🚀 Tecnologias Utilizadas

- **Node.js + Express 5**
- **MongoDB + Mongoose**
- **JWT** para autenticação
- **Bcrypt** para hash de senhas
- **Swagger UI** para documentação de API
- **dotenv** para variáveis de ambiente
- **CORS** configurado dinamicamente via `.env`

## 📁 Estrutura do Projeto

```
📦 to-do-list-express
├── app.js               # Inicialização da API
├── swagger.js           # Configuração do Swagger
├── package.json         # Dependências e scripts
├── /config
│   └── database.js      # Conexão com MongoDB
├── /controllers
│   ├── auth.js          # Login e registro
│   ├── task.js          # Operações de tarefas
│   └── admin.js         # Operações de admin
├── /middlewares
│   └── auth.js          # Verificação de token JWT
├── /models
│   ├── Task.js
│   └── User.js
├── /routes
│   ├── auth.js
│   ├── task.js
│   └── admin.js
```

## 🔐 Autenticação

Após realizar o login, o usuário recebe um token JWT que deve ser enviado no header das requisições protegidas:

```
Authorization: Bearer <seu_token_aqui>
```

## 📄 Documentação Swagger

Acesse a documentação interativa da API em:

📍 [`http://localhost:3000/api-docs`](http://localhost:3000/api-docs)

O Swagger já define os schemas de autenticação (`AuthInput`) e de tarefas (`TaskInput`), além de usar o esquema `bearerAuth` com JWT.

## 🔧 Como Rodar o Projeto

### 1. Pré-requisitos

- Node.js `v18+`
- MongoDB local ou MongoDB Atlas
- Editor de código (VS Code recomendado)

### 2. Instalação

```bash
git clone https://github.com/kauaregisdev/to-do-list-express
cd to-do-list-express
npm install
```

### 3. Arquivo `.env`

Crie um arquivo `.env` na raiz com as seguintes variáveis:

```
PORT=3000
JWT_SECRET=sua_chave_jwt_aqui
MONGODB_URI=mongodb://localhost:27017/todolist
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

> Dica: altere `CORS_ALLOWED_ORIGINS` conforme a origem do seu front-end React.

### 4. Executar o servidor

```bash
node app.js
# ou com nodemon (caso tenha instalado)
nodemon app.js
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🔁 Principais Rotas

### Auth

| Método | Rota             | Protegida | Descrição                      |
|--------|------------------|-----------|-------------------------------|
| POST   | `/auth/register` | ❌        | Cadastro de usuário           |
| POST   | `/auth/login`    | ❌        | Login e retorno de token JWT  |

### Tarefas (usuário logado)

| Método | Rota            | Protegida | Descrição                  |
|--------|-----------------|-----------|---------------------------|
| GET    | `/tasks/`       | ✅        | Lista tarefas do usuário  |
| POST   | `/tasks/`       | ✅        | Cria nova tarefa          |
| PUT    | `/tasks/:id`    | ✅        | Atualiza tarefa           |
| DELETE | `/tasks/:id`    | ✅        | Remove tarefa             |

### Admin

| Método | Rota             | Protegida | Descrição                     |
|--------|------------------|-----------|------------------------------|
| GET    | `/admin/tasks`   | ✅ (admin) | Lista todas as tarefas       |
| GET    | `/admin/users`   | ✅ (admin) | Lista todos os usuários      |

---

## ✅ Exemplos de Requisição

### Registro

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username": "kaua_regis", "password": "123456"}'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "kaua_regis", "password": "123456"}'
```

---

## 📌 Notas Finais

- O projeto diferencia usuários comuns e administradores via `role` no JWT.
- O campo `done` da tarefa é tratado para aceitar booleanos ou strings numéricas.
- Swagger facilita testes e integração com front-end.
- Front-end sugerido: React (já configurado no CORS).

---

## 👨‍💻 Autor

Projeto desenvolvido por [Kauã Régis](https://github.com/kauaregisdev)