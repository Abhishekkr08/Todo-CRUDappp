const mongoose = require('mongoose');

const DB = 'mongodb://localhost:27017/todo-list';

mongoose.connect(DB)
.then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log(err);
    console.log('database connection failed');
})
