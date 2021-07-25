const express = require('express');
const login = require('./src/controladores/login');
const gestor = require('./src/controladores/gestor');
const verificaLogin = require('./src/filtros/verificaLogin');

const rotas = express();

// cadastro de gestor
rotas.post('/cadastro', gestor.cadastrarGestor);

// login
rotas.post('/login', login.login);

// filtro para verificar usuario logado
rotas.use(verificaLogin);

// obter e atualizar perfil do usuario logado
rotas.get('/perfil', usuarios.obterPerfil);

//Listar voluntários
rotas.put('/perfil', usuarios.atualizarPerfil);



module.exports = rotas;