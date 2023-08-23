const RamalService = require('../services/RamalService');

module.exports = {
    buscarTodos: async (_, res) => {
        let json = {
            error: '',
            result: []
        };

        let ramais = await RamalService.buscarTodos();

        for (let i in ramais) {
            json.result.push({
                id: ramais[i].id,
                nome: ramais[i].nome,
                email: ramais[i].email,
                telefone: ramais[i].telefone,
                celular: ramais[i].celular,
                departamento: ramais[i].departamento
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
        let celular = req.body.celular;
        let departamento = req.body.departamento;

        if (nome && email && telefone && celular && departamento) {
            let ramalId = await RamalService.criar(nome, email, telefone, celular, departamento);
            json.result = {
                id: ramalId,
                nome,
                email,
                telefone,
                celular,
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
        let celular = req.body.celular;
        let departamento = req.body.departamento;

        if (id && nome && email && telefone && celular && departamento) {
            await RamalService.atualizar(id, modelo, placa);
            json.result = {
                id,
                nome,
                email,
                telefone,
                celular,
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