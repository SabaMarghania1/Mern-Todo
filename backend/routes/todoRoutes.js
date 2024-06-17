const express = require('express');
const router = express.Router();

const {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  deleteAllCompleted,
} = require('../controllers/todo.js');

router.route('/').get(getAllTodos).post(createTodo).delete(deleteAllCompleted);

router.route('/:id').delete(deleteTodo).patch(updateTodo);

module.exports = router;
