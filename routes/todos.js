var express = require('express');
var router = express.Router();
var todo = require('../models/todo')

/* GET home page. */
router.get('/', function (req, res, next) {
    todo.find({}).then((todos) => {
        res.json(todos)
    }).catch((err) => {
        res.send(err)
    })
});

router.post('/', function (req, res, next) {
    todo.create({
        title: req.body.title
    }).then((todos) => {
        res.json(todos)
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = router;