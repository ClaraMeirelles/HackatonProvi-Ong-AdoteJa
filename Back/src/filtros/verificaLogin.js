const knex = require('../conexao');
const jwt = require('jsonwebtoken');
const senhaHash = require('../senhaHash');

const verificaLogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, senhaHash);

        const gestorExiste = await knex('gestor').where({ id }).first();

        if (!gestorExiste) {
            return res.status(404).json('Gestor não encontrado');
        }

        const { senha, ...gestor } = gestorExiste;

        req.gestor = gestor;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificaLogin;