const express = require('express');
const router = express.Router();
const ctrTodo = require('../controllers/todo-controller.js');



router.get('/home', ctrTodo.homepage)

router.post('/home', ctrTodo.add_new_task)




// responses for all the requests whose url doenst exists
router.get('*', ctrTodo.wrnURL)


module.exports = router;