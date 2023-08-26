/* eslint-disable linebreak-style */
const express = require('express');
const router = express.Router();
const RamalController = require('./controllers/RamalController');
router.get('/ramais', RamalController.buscarTodos);
router.get('/ramal/:id', RamalController.buscarUm);
router.post('/ramal', RamalController.criar);
router.put('/ramal/:id', RamalController.atualizar);
router.delete('/ramal/:id', RamalController.excluir);
module.exports = router;