var express = require('express');
var router = express.Router();
var db = require("../models");
helpers = require("../helpers/todos");


router.route('/').get(helpers.getTodos).post(helpers.postTodos)

router.route('/:todoId')
.get(helpers.getTodo)
.put(helpers.putTodo)
.delete(helpers.deleteTodo)

module.exports = router;



// router.get('/', );

// router.post('/', );
// router.get('/:todoId', );
// router.put('/:todoId', );
// router.delete('/:todoId', );
