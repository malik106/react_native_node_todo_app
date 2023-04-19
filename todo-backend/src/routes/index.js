const express = require('express');

const router = express.Router();
const todoController = require('../controllers/index');

const { validateTodoToBeUpdated, validateTodoToBeAdded } = require('../validators/index');

/* GET home page. */
router.post('/todos', validateTodoToBeAdded, todoController.createTodo);

router.get('/todos', todoController.getTodos);

router.put('/todos/:id', validateTodoToBeUpdated, todoController.updateTodo);

router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
