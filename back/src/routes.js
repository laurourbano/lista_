/* eslint-disable linebreak-style */
const express = require('express');
const router = express.Router();
const FuncionarioController = require('./controllers/FuncionarioController');
// funcionarios
router.get('/funcionarios', FuncionarioController.buscarTodos);
router.get('/funcionario/:id', FuncionarioController.buscarUm);
router.post('/funcionario', FuncionarioController.criar);
router.put('/funcionario/:id', FuncionarioController.atualizar);
router.delete('/funcionario/:id', FuncionarioController.excluir);
module.exports = router;