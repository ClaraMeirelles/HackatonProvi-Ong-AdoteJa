# HackatonProvi-Ong-AdoteJa: API REST

## Back-end

### Api

Esta API tem a capacidade de:

- Cadastrar um depoimento de beneficiados/beneficiadores da ONG;
- Listar estes depoimentos;
- Apagar estes depoimentos;
- Cadastrar um Gestor/ADMIN para a aplicação;
- Realizar Login;
- Cadastrar voluntários;
- Listar e apagar os cadastros de Voluntários;
  
  **Importante: Lembre-se que não existirá Login/Cadastro de Usuario comum, qualquer depoimento e Voluntáriado pode ser feito sem necessidade de Login, portanto, cabe a admnistração da ONG tomar conta disto!**

  **Importante 2: Alguns Endpoints só podem ser acessados pela ADM da aplicação, seriam esses endpoints: Cadastro de Gestor,Apagar cadastro de voluntários e depoimentos, Listar Voluntários. Para acessar tais páginas, será necessario o envio de um Bearer Token, fornecido pelo Login, para a API!**

### Banco de dados

-1ª tabela ("gestor")
campos:
  -id 
  - senha
  - email

-2ª tabela ("voluntarios")
campos:
  -id
  -nome
  -cpf
  -genero
  -email
  -telefone
  -endereco
  -categoria
  -descricao
  -data ('data em que o formulário foi preenchido, o banco de dados faz ele de forma automatica')

-3ª tabela ("depoimentos")
campos:
  -id
  -nome
  -cpf
  -genero
  -email
  -telefone
  -endereco
  -animal
  -fotos
  -descricao
  -data ('data em que o formulário foi preenchido, o banco de dados faz ele de forma automatica')

-4ª tabela ("depoimento_fotos")
tabela auxiliar apenas:
  -depoimento_id
  -imagem

  *** Campos "Id" são preenchidos automaticamento!**

  ## Endpoints

  #### `POST` `/login`
Essa é a rota que permite o usuario cadastrado realizar o login no sistema.

  #### `POST` `/cadastrarDepoimento`
Essa é a rota que permite o usuario cadastrar um depoimento na aplicação

  #### `GET` `/depoimentos`
Essa é a rota que permite o usuario ver um depoimento na aplicação

  #### `POST` `/cadastrarVoluntario`
Essa é a rota que permite o usuario cadastrar um voluntário na aplicação

  ## Endpoints Protegidos
  
## ATENÇÃO: Todas as rotas abaixo deverão exigir o token do usuário logado. Portanto, para cada implementação será necessário validar o token informado.

#### `POST` `/cadastro`
Essa é a rota que permite o ADM cadastrar um novo ADM na aplicação
#### `DELETE` `/depoimentos/:id`
Essa é a rota que permite o ADM deletar um depoimento na aplicação
#### `DELETE` `/voluntarios/:id`
Essa é a rota que permite o ADM deletar um voluntário na aplicação
#### `GET` `/voluntarios`
Essa é a rota que permite o ADM visualizar os voluntários cadastrados