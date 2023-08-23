const db = require('../db');

module.exports = {

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM ramais', (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    criar: (nome, email, telefone, celular, departamento) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO carros (nome, email, telefone, celular, departamento) VALUES (?, ?, ?, ?, ?)', [nome, email, telefone, celular, departamento], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.insertId);
            });
        });
    },

    atualizar: (id, nome, email, telefone, celular, departamento) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE carros SET nome = ?, email = ?, telefone = ?, celular = ?, departamento = ? WHERE id = ?', [nome, email, telefone, celular, departamento, id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }

};