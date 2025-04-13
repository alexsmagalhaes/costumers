
# Costumers API
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)

## 📖 Sobre o Projeto

O **Costumers API** foi desenvolvida para testar a conexão de um banco de dados externo a aplicação, além do uso de testes automatizados e documentação.

![Imagem da interface](images/interface.png)

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js e Fastfy** → Para estruturação das rotas e endpoints
- **MongoDB** → Banco NoSQL para armazenamento de estatísticas
- **React e Axios** → Para documentação interativa da API
- **Typescript** → Para otimização do processamento
- **PrismaORM** → Para manipulação no banco de dados
- **Swagger** → Para documentação das rotas e endpoints

## 🏗️ Arquitetura do Projeto

A aplicação segue uma organização de **mono-repositório** e **baseada MVC no backend**, escolhidas para garantir simplicidade e agilidade no desenvolvimento, mantendo a simplicidade para futuras melhorias.

## 📥 Instalação

Para rodar a aplicação localmente, siga os passos abaixo:

####  Back-end
1. Clone o repositório:
   ```bash
   git clone https://github.com/alexsmagalhaes/knowledger-api.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd backend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto backend e configure as variáveis:
   ```env
   DATABASE_URL="mongodb+srv://user:password@clientes.0ilu6ej.mongodb.net/clientes?retryWrites=true&w=majority"
   ```
5. Execute a aplicação:
   ```bash
   npm run dev
   ```

####  Front-end
1. Clone o repositório:
   ```bash
   git clone https://github.com/alexsmagalhaes/knowledger-api.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd frontend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute a aplicação:
   ```bash
   npm run dev
   ```

## 📌 Documentação dos Endpoints com Swagger

A documentação completa dos endpoints pode ser acessada após a execução da aplicação no seguinte path:

```
http://localhost:3333/docs/
```
![Imagem do Swagger](images/swagger.png)

### 🔍 Lista de Endpoints

#### 👤 Customers
-   `GET /teste` → Teste de rota (retorna `{ ok: true }`)
-   `POST /customer` → Criar um novo cliente    
-   `GET /customers` → Listar todos os clientes
-   `DELETE /customer` → Remover um cliente

## 📜 Licença

Este projeto é baseado em projetos do Youtube. Ele pode ser usado para fins de aprendizagem.

---

Se você deseja colaborar ou melhorar este projeto, sinta-se à vontade para abrir um PR ou entrar em contato! 🚀
