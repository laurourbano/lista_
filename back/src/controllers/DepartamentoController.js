/* eslint-disable linebreak-style */
const DepartamentoService = require('../services/DepartamentoService');

module.exports = {
    buscarTodos: async (_, res) => {
        let json = {
            error: '',
            result: []
        };

        let departamento = await DepartamentoService.buscarTodos();

        for (let i in departamento) {
            json.result.push({
                id: departamento[i].id,
                nome: departamento[i].nome,
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let id = req.params.id;
        let departamento = await DepartamentoService.buscarUm(id);

        if (departamento) {
            json.result = departamento;
        }

        res.json(json);
    },

    criar: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let nome = req.body.nome;

        if (nome) {
            let departamentoId = await DepartamentoService.criar(nome);
            json.result = {
                id: departamentoId,
                nome
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    atualizar: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let id = req.params.id;
        let nome = req.body.nome;

        if (id && nome) {
            await DepartamentoService.atualizar(id, nome);
            json.result = {
                id,
                nome
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        await DepartamentoService.excluir(req.params.id);

        res.json(json);
    }

};