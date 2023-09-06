/* eslint-disable linebreak-style */
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM funcionarios', (error, results) => {
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
            db.query('SELECT * FROM funcionarios WHERE id = ?', [id], (error, results) => {
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

    criar: (nome, email, telefone, departamento) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO funcionarios (nome, email, telefone, departamento) VALUES (?, ?, ?, ?)', [nome, email, telefone, departamento], (error, results) => {
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
            db.query('UPDATE funcionarios SET nome = ?, email = ?, telefone = ?, departamento = ? WHERE id = ?', [nome, email, telefone, departamento, id], (error, results) => {
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
            db.query('DELETE FROM funcionarios WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }

};