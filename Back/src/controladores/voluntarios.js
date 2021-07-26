const knex = require('../conexao');

const cadastrarVoluntario = async (req, res) => {

    const { nome, cpf, genero, email, telefone, endereco, categoria, descricao } = req.body;

    if (!nome) {
        res.status(404).json('Campo Nome obrigatório')
    }

    if (!cpf) {
        res.status(404).json('Campo CPF obrigatório')
    }

    if (!genero) {
        res.status(404).json('Campo Genero obrigatório')
    }

    if (!email) {
        res.status(404).json('Campo Email obrigatório')
    }

    if (!telefone) {
        res.status(404).json('Campo Telefone obrigatório')
    }

    if (!endereco) {
        res.status(404).json('Campo Endereço obrigatório')
    }

    if (!categoria) {
        res.status(404).json('Campo Categoria obrigatório')
    }

    if (!descricao) {
        res.status(404).json('Campo Descrição obrigatório')
    }

    try {

        const voluntario = await knex('voluntarios').insert({
            nome,
            cpf,
            genero,
            email,
            telefone,
            endereco,
            categoria,
            descricao
        }).returning('*');

        if (!voluntario) {
            return res.status(400).json("Não foi possível concluir seu cadastro como voluntário");
        }

        return res.status(200).json("Voluntário cadastrado com sucesso!");

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const listarVoluntarios = async (req, res) => {
    try {
        const voluntarios = await knex('voluntarios')
            .select('*');

        if (voluntarios.length === 0) {
            return res.status(404).json('Não existem voluntários disponiveis no momento');
        }

        return res.status(200).json(voluntarios);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const apagarVoluntario = async (req, res) => {
    const { id } = req.params;

    try {
        const voluntarios = await knex('voluntarios').where({ id: id, id: id });

        if (!voluntarios[0]) {
            return res.status(404).json('Voluntário não encontrado');
        }

        const voluntarioExcluido = await knex('voluntarios').del().where('id', id);

        if (voluntarioExcluido === 0) {
            return res.status(400).json("O Voluntário não foi excluido");
        }

        return res.status(200).json('Voluntário excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = { cadastrarVoluntario, listarVoluntarios, apagarVoluntario }