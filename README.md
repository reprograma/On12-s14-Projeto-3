# On12-TodasEmTech-s14-ProjetoGuiado-BBD

Turma Online 12 - Todas em Tech | Back-end | 2021 | Semana 14: Projeto Guiado - CRUD com BD

## Tô de volta, turminha amada! <3

- Chamada, apresentação das monitoras e acordos:

<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
<br>

## Eu e o MongoDb <3

Minha história com o MongoDb.
Já dizia Jobs, a gente só consegue conectar os pontos olhando pra trás.

## Revisão

### `1. Por que precisamos de um banco de dados?`

Vantagens: 
* Facilidade de acesso
* Análises e comparativos
* Segurança de dados
* Atualizações e aprimoramento das informações
* Escalabilidade 

<br>
<br>

#### `2. NoSQL v/s SQL`

| NoSQL | SQL |
| --- | --- |
| `Surgiu no final dos anos 90 e como uma alternativa de natureza não relacional` | RDBMS ou Sistema de Gerenciamento de Banco de Dados Relacional, armazenam dados em um formato estruturado, usando linhas, colunas e tabelas |
| `Possuem alta escalabilidade e desempenho` | Geralmente demanda distribuição vertical de servidores, o que gera mais custo, pois quanto mais dados, mais memória e mais disco um servidor precisa. |
| `Alguns tipos de bancos de dados não relacional: armazenamento de chave-valor, armazenamento column family, orientado a grafos e orientado a documentos` | Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.|

Aqui está um comparativo dos termos MongoDb e SQL:

| MongoDB | SQL |
| --- | --- |
| `database` | database|
| `collection` | table|
| `document` | row|
| `field` | column|
| `lookup` | table joins|


<br>
<br>

#### `3. O que é MongoDB?`
Um banco de dados não relacional, orientado a documentos, livre com o código aberto e multiplataforma. Ele foi escrito na linguagem C++.

No MongoDB, os conjuntos de dados forma uma collection, cada item forma um documento e dentro dos documentos temos os campos.

Os dados são armazenados no formato JSON, o que é uma grande facilidade para quem programa com Javascript.

Podemos usá-lo pelo serviço de nuvem(cloud) ou localmente fazendo o download para nossa máquina (vamos usar essa opção).

Além disso, o Mongo possui seu driver com suas próprias queries(comandos para interação com o banco que se assemelham muito com javascript com orientação a objeto), podemos também usar uma interface gráfica e ainda podemos usar um ODM(vamos usar a última opção).

#### `4. Quem usa MongoDB?`
Mais de 22.600 clientes no mundo usam MongoDB. Algumas delas: Google, Forbes, eBay, Toyota, SAP, Adobe e muitas outras.

#### `5. Operações de CRUD`
O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados) . São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose essas funcionalidades são:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | remove() |

Para conhecer todas as operações MongoDb: 
https://docs.mongodb.com/manual/crud/

#### `6. O que é odm?`
Uma ferramenta que mapeia entre um Modelo de Objeto e um Banco de Dados de Documentos.

#### `7. Mongoose`

Mongoose é uma modelagem de objeto mongodb elegante para node.js.

Tudo no Mongoose começa com um Schema. Cada esquema é mapa para uma coleção MongoDB e define a forma dos documentos dentro dessa coleção.

Exemplo photoshop x Filtro do Instagram

#### `8. Conceito de Model (Schema)`
Model ou Schema são moldes que descrevem quais campos serão aceitos no seu banco de dados, podemos também definir informações de tipo de dados e fazer "os relacionamentos".

#### `9. Passos para conectar o MongoDb usando mongoose:`

1 - Crio meu schema no model
2 - Crio minha configuracao de conexao no database, passando informacoes padrão e a minha string de conexão
3 - Ligar a conexão no meu server, importando meu arquivo database

#### `10. Extra: `

`Dotenv`

Essa dica com certeza dará mais maturidade aos seus códigos de backend.
Afinal de contas dotenv é uma excelente ferramenta para gerenciar os dados sensíveis de desenvolvimento que não devem ser compartilhados como: chaves de API’s, informações do banco de dados, entre outras.

Vem aprender como orquestrar suas variáveis do ambiente dev em apenas 4 passos:

```
1- No seu projeto node com express, instale como dependência de desenvolvimento o dotenv. Utilize yarn ou npm.

yarn add dotenv -D
npm I —save-dev dotenv

2- Crie o arquivo .env

E nele crie suas chaves e valores que contém informações sensíveis e não podem ser compartilhadas além do ambiente de dev.

Por padrão as chaves são maiúsculas e não podem conter espaço, os valores ficam após o igual e podem ser de qualquer tipo pois retornarão sempre uma string:

NOME_DA_CHAVE=valor

3- Execute o ‘dotenv’, importando, usando a função config e incluindo ao processo para ler as variáveis configuradas:

require(‘dotenv’).config( )
process.env.NOME_DA_CHAVE

4- Como boa prática lembre-se de incluir seu arquivo .env no .gitignore

Você pode criar um .env.example e deixar apenas as chaves genéricas
```

## Sobre o Projeto

O **FavMovies** é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. 

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador. 

```
"Relacionamento" no MongoDB? Como é isso?
- ref no model
- populate do find (eager loading)
```

## Tecnologias que vamos usar:
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass ou Robo 3T` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|

<br>
<br>

## 📁 Arquitetura 

```
 📁 FavMovies
   |
   |-  📁 src
   |    |
   |    |- 📁 data
   |         |- 📄 database.js
   |
   |    |- 📁 controllers
   |         |- 📄 tituloController.js
   |         |- 📄 estudioController.js
   |
   |    |- 📁 models
   |         |- 📄 titulo.js
   |         |- 📄 estudio.js
   |
   |    |- 📁 routes
   |         |- 📄 tituloRoutes.js 
   |         |- 📄 estudioRoutes.js 
   |
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package
   |- 📄 server.js

```

<br>
<br>

## Contrato
Acesse o board para conferir as informações de forma visual: https://miro.com/app/board/o9J_lA7Nns8=/

### Requisitos 
- [ ]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [ ]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [ ]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [ ]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [ ]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [ ]  "**/estudios**" Deverá criar um estudio 
- [ ]  "**/titulos**"  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [ ]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [ ]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado


### Regras de negócio

- [ ]  Não deverá ser possível criar estudio com o mesmo nome
- [ ]  Não deverá ser possível criar título com o mesmo nome
- [ ]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório


### API deve retornar seguinte JSON:

```jsx
[
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad38c8c299c285d2685e7",
    "nome": "Marvel",
    "__v": 0
    },
    {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Ghibli",
    "__v": 0
  },
  {
    "criadoEm": "2021-06-05T01:27:40.886Z",
    "_id": "60bad33d8c299c285d2685e5",
    "nome": "Pixar",
    "__v": 0
  }
]
```
<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório


### API deve retornar seguinte JSON:

```jsx
[
  {
    "criadoEm": "2021-06-05T01:27:40.892Z",
    "_id": "60bad3568c299c285d2685e6",
    "nome": "Spirited Away",
    "genero": "romance",
    "descricao": "SPIRITED AWAY é uma fantasia maravilhosa sobre uma jovem garota, Chihiro, presa em um estranho mundo novo de espíritos. Quando seus pais passam por uma transformação misteriosa, ela deve invocar a coragem que ela nunca soube que tinha para se libertar e retornar sua família para o mundo exterior. Uma história inesquecível e cheia de criatividade, SPIRITED AWAY o levará em uma jornada além da sua imaginação.",
    "estudio": {
      "criadoEm": "2021-06-05T01:27:40.886Z",
      "_id": "60bad33d8c299c285d2685e5",
      "nome": "Ghibli",
    }
  }
]
```
<br>
<br>

## Entregavel

Crie seu repositório contendo:
 - um readme com os maiores aprendizados nesse projeto e copiando todas as informações sobre o projeto
 - cumprimento total do contrato (requisitos e regras de negócios) 
 - realizar testes no Postman e verificar se os dados estão persistindo com o mongoDB

Subir o repositório no classroom.

## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [quero ser dev](https://queroserdev.com)