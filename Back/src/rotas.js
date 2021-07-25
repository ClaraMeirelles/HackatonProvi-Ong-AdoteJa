const express = require('express');
const login = require('./controladores/login');
const gestor = require('./controladores/gestor');
const depoimento = require('./controladores/depoimento')
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

// cadastro de gestor
rotas.post('/cadastro', gestor.cadastrarGestor);

// login
rotas.post('/login', login.login);

//Cadastrar Depoimento
rotas.post('/cadastrarDepoimento', depoimento.cadastrarDepoimento);
rotas.get('/depoimentos', depoimento.listarDepoimentos);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

//
//rotas.post('/cadastrarDepoimento', depoimento.cadastrarDepoimento);

module.exports = rotas;