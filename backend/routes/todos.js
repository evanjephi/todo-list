const express = require('express');
const router = express.Router();

// Mock data
let todos = [];

// Get all todos
router.get('/', (req, res) => {
    res.json(todos);
});

// Add a new todo
router.post('/', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

// Delete a todo
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

module.exports = router;
