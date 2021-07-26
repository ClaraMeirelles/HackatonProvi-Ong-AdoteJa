const knex = require('../conexao');

const cadastrarDepoimento = async (req, res) => {
    //const { usuario } = req;
    const {
        nome,
        cpf,
        genero,
        email,
        telefone,
        endereco,
        animal,
        fotos,
        descricao
    } = req.body;

    if (!fotos || fotos.length === 0) {
        return res.status(404).json("É preciso informar ao menos uma foto");
    }

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório');
    }

    if (!cpf) {
        return res.status(404).json('O campo senha é obrigatório');
    }

    if (!genero) {
        return res.status(404).json('O campo email é obrigatório');
    }

    if (!email) {
        return res.status(404).json('O campo email é obrigatório');
    }

    if (!telefone) {
        return res.status(404).json('O campo email é obrigatório');
    }

    if (!endereco) {
        return res.status(404).json('O campo email é obrigatório');
    }

    if (!animal) {
        return res.status(404).json('O campo email é obrigatório');
    }

    if (!descricao) {
        return res.status(404).json('O campo email é obrigatório');
    }

    try {
        const depoimento = await knex('depoimentos').insert({
            nome,
            cpf,
            genero,
            email,
            telefone,
            endereco,
            animal,
            descricao
        }).returning('*');

        if (!depoimento) {
            return res.status(400).json("Não foi possível concluir seu depoimento");
        }

        for (const foto of fotos) {
            foto.depoimento_id = depoimento[0].id;
        }

        const fotosCadastradas = await knex('depoimento_fotos').insert(fotos);

        if (!fotosCadastradas) {
            await knex('depoimentos').where({ id: depoimento[0].id }).del();
            return res.status(400).json("Não foi possível concluir o seu depoimento");
        }

        return res.status(200).json("Depoimento cadastrado com sucesso!");

    } catch (error) {
        return res.status(400).json(error.message);
    }

}

const listarDepoimentos = async (req, res) => {

    try {
        const depoimentos = await knex('depoimentos')
            .select('*');

        if (depoimentos.length === 0) {
            return res.status(404).json('Não existem depoimentos disponiveis no momento');
        }

        for (depoimento of depoimentos) {
            //Atrelando a imagem a o depoimento
            const fotos = await knex('depoimento_fotos')
                .where({ depoimento_id: depoimento.id })
                .select('imagem');
            depoimento.fotos = fotos;
        }

        return res.status(200).json(depoimentos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const apagarDepoimento = async (req, res) => {
    const { id } = req.params;

    try {
        const depoimentos = await knex('depoimentos').where({ id: id, id: id });

        if (!depoimentos[0]) {
            return res.status(404).json('Depoimento não encontrado');
        }

        const depoimentoExcluido = await knex('depoimentos').del().where('id', id);

        if (depoimentoExcluido === 0) {
            return res.status(400).json("O Depoimento não foi excluido");
        }

        return res.status(200).json('Depoimento excluido com sucesso');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastrarDepoimento,
    listarDepoimentos,
    apagarDepoimento
}