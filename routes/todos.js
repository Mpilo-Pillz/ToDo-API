var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', (req, res) => {
    // res.send("YAw from Router");
    db.Todo.find().then(function(todos) {
        res.json(todos);
    }).catch(function(err) {
        res.send(err);
    })
});

router.post('/', (req, res) => {
   db.Todo.create(req.body).then(function(newTodo) {
    res.status(201).json(newTodo);
   }).catch(function(err) {
       res.send(err);
   })
});

router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId).then((foundToDo)=>{
        res.json(foundToDo)
    }).catch((err)=>{
        res.send(err);
    })
});

router.put('/:todoId', (req, res) => {
    db.Todo.findByIdAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then((todo)=>{
        res.json(todo);
    }).catch((err)=>{
        res.send(err);
    })
});
router.delete('/:todoId', function(req, res) {
    db.Todo.remove({_id: req.params.todoId}).then(function(){
        res.json({message: 'we deleted it'})
    }).catch(function(err){
        res.send(err);
    })
});

module.exports = router;