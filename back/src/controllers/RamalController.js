/* eslint-disable linebreak-style */
const RamalService = require('../services/RamalService');

module.exports = {
    buscarTodos: async (_, res) => {
        let json = {
            error: '',
            result: []
        };

        let funcionarios = await RamalService.buscarTodos();

        for (let i in funcionarios) {
            json.result.push({
                id: funcionarios[i].id,
                nome: funcionarios[i].nome,
                email: funcionarios[i].email,
                telefone: funcionarios[i].telefone,
                departamento: funcionarios[i].departamento
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
        let ramal = await RamalService.buscarUm(id);

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

        let nome = req.body.nome;
        let email = req.body.email;
        let telefone = req.body.telefone;
        let departamento = req.body.departamento;

        if (nome && email && telefone && departamento) {
            let ramalId = await RamalService.criar(nome, email, telefone, departamento);
            json.result = {
                id: ramalId,
                nome,
                email,
                telefone,
                departamento
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
        let email = req.body.email;
        let telefone = req.body.telefone;
        let departamento = req.body.departamento;

        if (id && nome && email && telefone && departamento) {
            await RamalService.atualizar(id, nome, email, telefone, departamento);
            json.result = {
                id,
                nome,
                email,
                telefone,
                departamento
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

        await RamalService.excluir(req.params.id);

        res.json(json);
    }

};