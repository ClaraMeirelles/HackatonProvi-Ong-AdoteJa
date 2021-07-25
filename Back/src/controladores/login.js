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

        const senhaCorreta = await bcrypt.compare(senha, gestor.senha);

        if (!senhaCorreta) {
            return res.status(400).json("Email e senha não confere");
        }

        const token = jwt.sign({
            id: gestor.id,
            email: gestor.email
        }, senhaHash, { expiresIn: '8h' });

        const { senha: _, ...dadosGestor } = gestor;

        return res.status(200).json({
            gestor: dadosGestor,
            token
        });
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    login
}