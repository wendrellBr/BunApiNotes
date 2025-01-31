
# 🚀 API simples de Notas com Bun, Prisma e SQLite

Uma API simples e serverless para conhecer o bun, construída com **Bun**, **Prisma** e **SQLite**.

---

## 📋 Visão Geral

Esta API permite realizar operações CRUD (Create, Read, Update, Delete) em notas. Cada nota contém um título, conteúdo e datas de criação/atualização.

### Tecnologias utilizadas:
- **[Bun](https://bun.sh/)**: Runtime rápido e moderno para JavaScript/TypeScript.
- **[Prisma](https://www.prisma.io/)**: ORM para acesso ao banco de dados.
- **[SQLite](https://www.sqlite.org/)**: Banco de dados leve e embutido.

---

## 🛠️ Como executar o projeto

### Pré-requisitos
- [Bun](https://bun.sh/) instalado.

### Passos para configurar e executar:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/wendrellBr/BunApiRest.git
   cd BunApiNotes
   ```

2. **Instale as dependências**:
   ```bash
   bun install
   ```

3. **Configure o banco de dados**:
   - O Prisma já está configurado para usar SQLite.
   - O arquivo de banco de dados será criado em `prisma/dev.db`.

4. **Execute as migrações do Prisma**:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Criar as variaveis de ambiente :
   ```bash
   touch .env
   ```

6. **Inicie o servidor**:
   ```bash
   bun run src/server.ts
   ```

   O servidor estará rodando em `http://localhost:3333`.

---

## 📂 Estrutura do Projeto

```
BunApiNotes/
├── prisma/
│   ├── dev.db           # Banco de dados SQLite
│   └── schema.prisma    # Schema do Prisma
├── src/
│   ├── handlers/        # Manipuladores de requisições
│   ├── repositories/    # Lógica de acesso ao banco de dados
│   ├── routes/          # Definição das rotas da API
│   ├── dtos/            # Data Transfer Objects (DTOs)
│   └── server.ts        # Ponto de entrada da API
├── .env                 # Variáveis de ambiente
├── package.json         # Dependências do projeto
└── README.md            # Este arquivo
```

---

## 📝 Rotas da API

### Listar todas as notas
- **Método**: `GET`
- **URL**: `/notes`
- **Resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "Minha nota",
      "content": "Conteúdo da nota",
      "createdAt": "2025-01-01T12:00:00.000Z",
      "updatedAt": "2025-01-01T12:00:00.000Z"
    }
  ]
  ```

### Criar uma nova nota
- **Método**: `POST`
- **URL**: `/notes`
- **Corpo da requisição**:
  ```json
  {
    "title": "Minha nota",
    "content": "Conteúdo da nota"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "title": "Minha nota",
    "content": "Conteúdo da nota",
    "createdAt": "2025-01-01T12:00:00.000Z",
    "updatedAt": "2025-01-01T12:00:00.000Z"
  }
  ```

### Atualizar uma nota
- **Método**: `PUT`
- **URL**: `/notes/:id`
- **Corpo da requisição**:
  ```json
  {
    "title": "Título atualizado",
    "content": "Conteúdo atualizado"
  }
  ```
- **Resposta**:
  ```json
  {
    "id": 1,
    "title": "Título atualizado",
    "content": "Conteúdo atualizado",
    "createdAt": "2025-01-01T12:00:00.000Z",
    "updatedAt": "2025-01-01T12:30:00.000Z"
  }
  ```

### Deletar uma nota
- **Método**: `DELETE`
- **URL**: `/notes/:id`
- **Resposta**: Status `204 No Content`.

---

## 🧪 Testando a API

### Exemplos com `curl`:

1. **Criar uma nota**:
   ```bash
   curl -X POST http://localhost:3000/notes \
   -H "Content-Type: application/json" \
   -d '{"title": "Minha nota", "content": "Conteúdo da nota"}'
   ```

2. **Listar todas as notas**:
   ```bash
   curl http://localhost:3000/notes
   ```

3. **Atualizar uma nota**:
   ```bash
   curl -X PUT http://localhost:3000/notes/1 \
   -H "Content-Type: application/json" \
   -d '{"title": "Título atualizado", "content": "Conteúdo atualizado"}'
   ```

4. **Deletar uma nota**:
   ```bash
   curl -X DELETE http://localhost:3000/notes/1
   ```

---
