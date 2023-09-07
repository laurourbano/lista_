/* eslint-disable linebreak-style */
const RamalService = require('../services/FuncionarioService');

module.exports = {
    buscarTodos: async (_, res) => {
        let json = {
            error: '',
            result: []
        };

        let funcionarios = await RamalService.buscarTodos();

        for (let i in funcionarios) {
            json.result.push({
                idfuncionario: funcionarios[i].idfuncionario,
                nomefuncionario: funcionarios[i].nomefuncionario,
                email: funcionarios[i].email,
                ramal: funcionarios[i].ramal,
                iddepartamento: funcionarios[i].iddepartamento
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let idfuncionario = req.params.idfuncionario;
        let ramal = await RamalService.buscarUm(idfuncionario);

        if (ramal) {
            json.result = ramal;
        }

        res.json(json);
    },

    criar: async (req, res) => {
        let json = {
            error: '',
            result: {}
        };

        let nomefuncionario = req.body.nomefuncionario;
        let email = req.body.email;
        let ramal = req.body.ramal;
        let iddepartamento = req.body.iddepartamento;

        if (nomefuncionario && email && ramal && iddepartamento) {
            let funcionarioId = await RamalService.criar(nomefuncionario, email, ramal, iddepartamento);
            json.result = {
                idfuncionario: funcionarioId,
                nomefuncionario,
                email,
                ramal,
                iddepartamento
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

        let idfuncionario = req.params.idfuncionario;
        let nomefuncionario = req.body.nomefuncionario;
        let email = req.body.email;
        let ramal = req.body.ramal;
        let iddepartamento = req.body.iddepartamento;

        if (idfuncionario && nomefuncionario && email && ramal && iddepartamento) {
            await RamalService.atualizar(idfuncionario, nomefuncionario, email, ramal, iddepartamento);
            json.result = {
                idfuncionario,
                nomefuncionario,
                email,
                ramal,
                iddepartamento
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

        await RamalService.excluir(req.params.idfuncionario);

        res.json(json);
    }

};