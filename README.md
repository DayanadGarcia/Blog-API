# Boas-vindas ao repositório do projeto API de Blogs!
  
  Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog!

-----

### Tecnologias Utilizadas

  - Node.js
  - Sequelize

### Objetivo

  Você deverá desenvolver uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Você deverá desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Será necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

<br />

<br />

# Orientações

<details>
  <summary>
    <strong>👉 Como abrir a aplicação</strong>
  </summary>

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-017-project-blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-017-project-blogs-api`

2. Instale as dependências
  * `npm install`

<br />
</details>

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary>
  
  ## 👉 Com Docker
 
  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  ![sequelize test](./public/remote-container.png)

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`
  
  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  - **✨ Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  - **✨ Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

  <br/>
</details>

<details>
  <summary  id="diagrama"><strong>🎲 Diagrama ER e Entidades</strong></summary>

  #### Diagrama de Entidade-Relacionamento

  A construção das tabelas foi feita através do ORM, utilizando o *DER* a seguir:

  ![DER](./public/der.png)

  ---

  #### Formato das entidades

  O projeto utiliza o `ORM Sequelize` para criar e atualizar o banco de dados. 

  - Uma tabela chamada **Users**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 1,
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com", // tem quer ser único
      "password": "123456",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
    ```
  - Uma tabela chamada **Categories**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 18,
      "name": "News"
    }
    ```

  - Uma tabela chamada **BlogPosts**, contendo dados com a seguinte estrutura:

    ```json
    {
      "id": 21,
      "title": "Latest updates, August 1st",
      "content": "The whole text for the blog post goes here in this key",
      "userId": 14, // Chave estrangeira, referenciando o id de `Users`
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.947Z",
    }
    ```

  - Uma tabela chamada **PostCategories**, contendo uma **chave primária composta** utilizando os dois atributos da estrutura:

    ```json
    {
      "postId": 50, // Chave primária e estrangeira, referenciando o id de `BlogPosts`
      "categoryId": 20 // Chave primária e estrangeira, referenciando o id de `Categories`
    }
    ```
    *Os dados acima são fictícios, e estão aqui apenas como exemplo*

</details>

<br />

# Requisitos Desenvolvidos

## 1 - Crie migrations para as entidades User, Categories, BlogPosts, PostCategories

---

## 2 - Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas

---

## 3 - Sua aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```

---

## 4 - Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

---

## 5 - Sua aplicação deve ter o endpoint GET `/user`

- ☝ Validar o `token` neste requisito
- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

---

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

- ☝ Validar o `token` neste requisito,
- O endpoint deve ser acessível através do URL `/user/:id`;
- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

---

## 7 - Crie o modelo 'Category' em 'src/database/models/category.js' com as propriedades corretas

---

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

- ☝ Validar o `token` neste requisito
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```

---

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

- ☝ Validar o `token` neste requisito
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

---

## 10 - Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas

---

## 11 - Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas

---

## 12 - Sua aplicação deve ter o endpoint POST `/post`

- ☝ Validar o `token` neste requisito
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de adicionar um novo blog post e vinculá-lo as categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```
 
---

## 13 - Sua aplicação deve ter o endpoint GET `/post`

- ☝ Validar o `token` neste requisito
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de trazer todos os bogs post, user dono dele e as categorias do banco de dados;
