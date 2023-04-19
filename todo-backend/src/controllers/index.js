const todoService = require('../services/index');

const defaultErrorType = 'INTERNAL_SERVER_ERROR';
const defaultErrorMsg = 'Something went wrong. Please try again later';

exports.createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    if (todo) {
      return res.status(201).json({
        data: todo,
        message: 'Todo added successfully!',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};
exports.getTodos = async (req, res) => {
  try {
    const todos = await todoService.getTodos();
    if (todos) {
      return res.status(200).json({
        data: todos,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};
exports.updateTodo = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const todo = await todoService.updateTodo(id, req.body);
    console.log(todo);
    if (todo) {
      return res.status(200).json({
        data: todo,
        message: 'Todo updated successfully!',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const todo = await todoService.deleteTodo(id);
    if (todo) {
      return res.status(200).json({
        message: 'Todo deleted successfully!',
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorType,
      error_message: error.errorMessage || defaultErrorMsg,
    });
  }
};
