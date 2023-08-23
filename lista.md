# Lista de ramais com front-end e back-end

* [ ] [artigo base](https://pt.linkedin.com/pulse/construindo-uma-api-com-nodejs-e-express-yesmin-marie-soret-lahoud)

* [x] criar arquivo .gitignore global - adicionar o node_modules yarn.lock e .env

* [x] criar arquivo .env e .env.example global

* [x] criar o arquivo package.json e adicionar os scripts

## Back end: NodeJs

* [x] `yarn init -y`

* [x] usando o common js
* [x] adicionar e configurar o eslint

* [x] usar arquivo routes.js no diretório src/routes;
* [x] usar arquivo controller.js no diretório src/controllers;
* [x] usar arquivo service.js no diretório src/services;

### interface contato

#### criar banco de dados lista, com uma tabela ramais, que contenha as colunas

* [x] id *
* [x] nome *
* [x] email ?
* [x] telefone ?
* [x] celular ?
* [x] departamento * (select)

### tela de cadastro

* [ ] formulário criar ou atualizar contato

* [ ] cuidado ao fazer a api: req.params.(parametro), req.body.(corpo da requisição);

### Implementar os verbos http para a api

* [x] `GET`: Buscar informações do backend;
* [x] `GETID`: Buscar informações do backend por contato;
* [x] `POST`: Criar uma informação no backend;
* [x] `PUT`: Alterar uma informação no backend.
* [x] `DELETE`: Deletar uma informação no backend;

Fazer a api com:

* [x] nodejs;
* [x] express;
* [x] dotenv;
* [x] cors;
* [x] mysql2;
* [x] nodemon;

* [ ] **ver mais sobre o swagger para documentação**

----------------------////-------------------------

## Front end: Angular

* [x] `ng new lista`

* [ ] criar components
* [ ] criar services
* [ ] criar pipes
* [ ] criar diretivas

----------------------////-------------------------

### IDEIAS

* [ ] select para o departamento;
* [ ] usar o angular material para estilizar os componentes;
* [ ] usar a fonte Poppins;
* [ ] pensar na paleta de cores padrão para o angular;
* [x] utilizar o thunderclient para testar a api;
