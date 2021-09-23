var express = require('express');
var api = express.Router();
var transactionController = require('../controllers/transaction')


api.post('/transaction', transactionController.createTransaction);

api.get('/movements/:id?/:type?', transactionController.getMovements);
api.get('/movements-criteria/:criteria?', transactionController.getMovementsByValue);


// api.get('/movements/spent/:id?', transactionController.getUserSpent);
// api.get('/movements/in/:id?', transactionController.getUserIn);

module.exports = api;