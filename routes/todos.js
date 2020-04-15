var express = require("express");
var router = express.Router();

const Todo = require("../models/todo");

router.get("/", (req, res) => {
  res.render("todos/index.ejs", {
    todos: Todo.getAll()
  });
});

module.exports = router;
