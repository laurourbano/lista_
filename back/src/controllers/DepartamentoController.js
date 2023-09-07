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
                iddepartamento: departamento[i].iddepartamento,
                nomedepartamento: departamento[i].nomedepartamento,
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let iddepartamento = req.params.iddepartamento;
        let departamento = await DepartamentoService.buscarUm(iddepartamento);

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

        let nomedepartamento = req.body.nomedepartamento;

        if (nomedepartamento) {
            let departamentoId = await DepartamentoService.criar(nomedepartamento);
            json.result = {
                iddepartamento: departamentoId,
                nomedepartamento
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

        let iddepartamento = req.params.iddepartamento;
        let nomedepartamento = req.body.nomedepartamento;

        if (iddepartamento && nomedepartamento) {
            await DepartamentoService.atualizar(iddepartamento, nomedepartamento);
            json.result = {
                iddepartamento,
                nomedepartamento
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

        await DepartamentoService.excluir(req.params.iddepartamento);

        res.json(json);
    }

};