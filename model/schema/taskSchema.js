const mongoose = require('mongoose');

const todo_input_field = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    taskname: {
        type: String,
        required: true
    }
    
})



const task_schema = new mongoose.model('tasks', todo_input_field);
module.exports = task_schema;


