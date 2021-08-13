#### Projeto Movies | Semana 14 :rocket:

### Bem vindos ao FavMovies :sunglasses:

O FavMovies é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criado.

### Regras de negócio

* Não deverá ser possível criar estudio com o mesmo nome.

* Não deverá ser possível criar título com o mesmo nome.

* Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema, utilizando o numero do id do estudio correspondente no corpo da requisição.

### Orientações para as requests :point_down:

Organizei os endpoints com as respectivas ações do CRUD , relacionando - as com as demandas de negócio.

* **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel

* **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli

* **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

* **"/estudios"** Deverá retornar todos os estudios cadastrados

* **"/titulos"** Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

* **"/estudios"** Deverá criar um estudio

* **"/titulos"** Deverá criar um título

* **"/titulos/[ID]"** Deverá deletar titulo por id específico e retorna mensagem amigável

* **"/estudios/[ID]"** Deverá deletar estudio por id específico e retorna mensagem amigável

* **"/titulos/[ID]"** Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado

* **"/estudios/[ID]"** Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado.


