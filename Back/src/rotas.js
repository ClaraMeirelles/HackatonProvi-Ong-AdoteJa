const express = require('express');
const login = require('./controladores/login');
const gestor = require('./controladores/gestor');
const depoimento = require('./controladores/depoimento');
const voluntarios = require('./controladores/voluntarios')
const verificaLogin = require('./filtros/verificaLogin');


const rotas = express();

// cadastro de gestor
rotas.post('/cadastro', gestor.cadastrarGestor);

// login
rotas.post('/login', login.login);

//Cadastrar Depoimento
rotas.post('/cadastrarDepoimento', depoimento.cadastrarDepoimento);
rotas.get('/depoimentos', depoimento.listarDepoimentos);

//Apagar Depoimento
rotas.delete('/depoimentos/:id', depoimento.apagarDepoimento);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

//Cadastrar Voluntários
rotas.post('/cadastrarVoluntario', voluntarios.cadastrarVoluntario);

//Listar Voluntários
rotas.get('/voluntarios', voluntarios.listarVoluntarios);

//Apagar Voluntários
rotas.delete('/voluntarios/:id', voluntarios.apagarVoluntario);

module.exports = rotas;