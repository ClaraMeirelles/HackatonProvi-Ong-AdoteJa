const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarGestor = async (req, res) => {
    const { usuario } = req;
    const { gestor, email, senha } = req.body;

    if (!gestor) {
        return res.status(404).json('O campo gestor é obrigatório');
    }

    if (!email) {
        return res.status(404).json('O campo email é obrigatório');
    }

    if (!senha) {
        return res.status(404).json('O campo senha é obrigatório');
    }

    try {
        const gestorExiste = await knex('gestor').select('*').where({ email }).first();
        
        if (gestorExiste) {
            return res.status(400).json("Este email já foi cadastrado.");
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const novoGestor = await knex('gestor').insert({
            usuario: gestor,
            email,
            senha: senhaCriptografada
        }).returning('*');

        if (!novoGestor) {
            return res.status(400).json('O gestor não foi cadastrado');
        }

        return res.status(200).json(novoGestor);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarGestor
}