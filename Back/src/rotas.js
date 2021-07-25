const express = require('express');
const login = require('./controladores/login');
const gestor = require('./controladores/gestor');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

// cadastro de gestor
rotas.post('/cadastro', gestor.cadastrarGestor);

// login
rotas.post('/login', login.login);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

module.exports = rotas;