const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(404).json('É obrigatório email e senha');
    }

    try {
        const gestor = await knex('gestor').select('*').where({ email }).first();

        if (!gestor) {
            return res.status(404).json('O gestor não foi encontrado');
        }

        const buscarSenha = await knex('gestor').select('senha').where({ email }).first();
        
        const senhaCorreta = await bcrypt.compare(senha, buscarSenha.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Email e senha não confere");
        }

        //adicionar token 

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}