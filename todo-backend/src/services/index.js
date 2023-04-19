const todoModal = require('../modals/index');

exports.createTodo = (packet) => todoModal.createTodo(packet);
exports.getTodos = () => todoModal.getTodos();
exports.updateTodo = (id, packet) => todoModal.updateTodo(id, packet);
exports.deleteTodo = (id) => todoModal.deleteTodo(id);
