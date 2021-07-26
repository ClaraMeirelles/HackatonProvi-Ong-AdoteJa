const express = require('express');
const login = require('./controladores/login');
const gestor = require('./controladores/gestor');
const depoimento = require('./controladores/depoimento');
const voluntarios = require('./controladores/voluntarios')
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express();

// login
rotas.post('/login', login.login);

//Cadastrar Depoimento
rotas.post('/cadastrarDepoimento', depoimento.cadastrarDepoimento);

//Listar Depoimentos
rotas.get('/depoimentos', depoimento.listarDepoimentos);


//Cadastrar Voluntários
rotas.post('/cadastrarVoluntario', voluntarios.cadastrarVoluntario);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// cadastro de gestor
rotas.post('/cadastro', gestor.cadastrarGestor);

//Apagar Depoimento
rotas.delete('/depoimentos/:id', depoimento.apagarDepoimento);

//Listar Voluntários
rotas.get('/voluntarios', voluntarios.listarVoluntarios);

//Apagar Voluntários
rotas.delete('/voluntarios/:id', voluntarios.apagarVoluntario);

module.exports = rotas;