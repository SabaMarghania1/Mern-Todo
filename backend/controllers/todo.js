const Todo = require('../models/todoModel');
const customError = require('../errors/custom-error');

const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json({data: todos, nbHit: todos.length});
};

const createTodo = async (req, res) => {
  const {name} = req.body;
  if (!name) {
    throw new customError('Title is required', 400);
  }
  const todo = await Todo.create(req.body);
  res.status(201).json({status: 'success', data: todo});
};

const deleteTodo = async (req, res) => {
  const {id} = req.params;
  if (!id) {
    throw new customError(400, 'No todo with this id');
  }
  const deletedTodo = await Todo.findOneAndDelete({_id: id});
  console.log(deletedTodo);
  res.status(200).json({deletedTodo: deletedTodo});
};

const updateTodo = async (req, res) => {
  const {id} = req.params;

  try {
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({error: 'Todo not found'});
    }

    todo.completed = !todo.completed;

    await todo.save();

    return res.status(200).json({message: 'Todo updated successfully', todo});
  } catch (error) {
    console.error('Error updating todo:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
};

const deleteAllCompleted = async (req, res) => {
  const todos = await Todo.deleteMany({completed: true});

  res.status(204).json(todos);
};

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  deleteAllCompleted,
};
