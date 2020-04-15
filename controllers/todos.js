const Todos = require("../models/todo");

const index = (req, res) => {
  res.render("todos/index", { todos: Todos.getAll() });
};

module.exports = { index };
