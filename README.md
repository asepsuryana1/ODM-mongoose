# ODM-mongoose

### instalasi
```bash
$ npm install
$ npm install nodemon -D
$ npm install mongoose -S
```
##### [Dokumentasi](https://www.npmjs.com/package/mongoose)

#### mongoose connect
```js
await mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
```
```create models/todo.js```
```js
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title: String,
    complete: {type: Boolean, default: false}
  });
  module.exports = mongoose.model('todo', todoSchema);

```
## Router
```js
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

router.put('/:id', function (req, res, next) {
    todo.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title, complete: req.body.complete
        }, { new: true}
        ).then((todos) => {
            res.json(todos)
        }).catch((err) => {
            res.send(err)
        })
});
router.delete('/:id', function (req, res, next) {
    todo.findByIdAndRemove(
        req.params.id
        ).then((todos) => {
            res.json(todos)
        }).catch((err) => {
            res.send(err)
        })
});
```