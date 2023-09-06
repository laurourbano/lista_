/* eslint-disable linebreak-style */
const express = require('express');
const router = express.Router();
const RamalController = require('./controllers/RamalController');
const DepartamentoController = require('./controllers/DepartamentoController');
// departamentos
router.get('/departamentos', DepartamentoController.buscarTodos);
router.get('/departamento/:id', DepartamentoController.buscarUm);
router.post('/departamento', DepartamentoController.criar);
router.put('/departamento/:id', DepartamentoController.atualizar);
router.delete('/departamento/:id', DepartamentoController.excluir);
// ramais
router.get('/funcionarios', RamalController.buscarTodos);
router.get('/funcionario/:id', RamalController.buscarUm);
router.post('/funcionario', RamalController.criar);
router.put('/funcionario/:id', RamalController.atualizar);
router.delete('/funcionario/:id', RamalController.excluir);
module.exports = router;