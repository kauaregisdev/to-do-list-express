# 📝 To-Do List App — Full Stack (React + Express + MongoDB)

Este é um projeto full stack para gerenciamento de tarefas (to-do list), com autenticação JWT, painel de administração e front-end estilizado com Tailwind CSS.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend (Node.js + Express)
- Express 5
- MongoDB + Mongoose
- JWT (Autenticação)
- Bcrypt (Hash de senhas)
- Swagger (Documentação da API)
- dotenv e CORS

### 🌐 Frontend (React + Vite)
- React + React Router DOM
- Axios
- Tailwind CSS
- ESLint
- Vite.js

---

## 🔐 Funcionalidades

- Cadastro e login de usuários com JWT
- Criação, edição e exclusão de tarefas
- Diferenciação entre usuário comum e administrador
- Interface moderna e responsiva
- Integração completa entre front-end e back-end
- Documentação Swagger acessível via navegador

---

## 📂 Estrutura de Pastas

```
📦 backend/
├── app.js
├── .env
├── /config
├── /controllers
├── /middlewares
├── /models
├── /routes
├── swagger.js
└── package.json

📦 frontend/
├── index.html
├── vite.config.js
├── eslint.config.js
├── .env.production
├── /src
│   ├── main.jsx
│   ├── App.jsx
│   ├── /api
│   ├── /auth
│   ├── /pages
│   ├── /components
│   └── /styles
└── package.json
```

---

## ⚙️ Como Executar o Projeto

### 1. Clonar o repositório e acessar as pastas:

```bash
git clone https://github.com/kauaregisdev/to-do-list-express
cd backend
```

### 2. Configurar o Back-end

#### 🔧 Variáveis de Ambiente (`backend/.env`)
```
PORT=3000
MONGODB_URI=mongodb+srv://db_user:dbuser123@cluster0.a6xnwiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=sua_chave_jwt
CORS_ALLOWED_ORIGINS=http://localhost:5173
```

#### 🔨 Instalar dependências e iniciar:
```bash
npm install
node app.js
```

A API estará disponível em: `http://localhost:3000`  
Swagger: `http://localhost:3000/api-docs`

---

### 3. Configurar o Front-end

#### 🔧 Variáveis de Ambiente (`frontend/.env.production`)
```
VITE_API_URL=http://localhost:3000/
```

#### 🔨 Instalar dependências e iniciar:
```bash
cd ../frontend
npm install
npm run dev
```

A interface estará acessível em: `http://localhost:5173`

> O front-end está pré-configurado para se comunicar com a API em `http://localhost:3000`.

---

## 🔁 Rotas da API

### Auth

| Método | Rota             | Protegida | Descrição             |
|--------|------------------|-----------|------------------------|
| POST   | /auth/register   | ❌        | Criar novo usuário     |
| POST   | /auth/login      | ❌        | Login e geração de JWT |

### Tarefas

| Método | Rota            | Protegida | Descrição                |
|--------|-----------------|-----------|---------------------------|
| GET    | /tasks/         | ✅        | Listar tarefas do usuário |
| POST   | /tasks/         | ✅        | Criar nova tarefa         |
| PUT    | /tasks/:id      | ✅        | Atualizar tarefa          |
| DELETE | /tasks/:id      | ✅        | Deletar tarefa            |

### Admin

| Método | Rota            | Protegida (admin) | Descrição                      |
|--------|------------------|-------------------|-------------------------------|
| GET    | /admin/tasks     | ✅                | Listar todas as tarefas        |
| GET    | /admin/users     | ✅                | Listar todos os usuários       |

---

## 📄 Swagger

A documentação da API está disponível em:

👉 [`http://localhost:3000/api-docs`](http://localhost:3000/api-docs)

---

## ✨ Extras

- Front-end usa Tailwind e Vite para uma UI leve e responsiva.
- O `axios` está configurado para enviar o token JWT automaticamente após login.
- O sistema diferencia permissões via `role` no token JWT.
- CORS está configurado dinamicamente para integração local com o React.

---

## 👨‍💻 Autor

Desenvolvido por [Kauã Régis](https://github.com/kauaregisdev)