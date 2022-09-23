require('../model/db/conn');
const task_schema = require('../model/schema/taskSchema.js');


const homepage = (req, res) => {
    res.render('home');
}


const add_new_task = async (req, res) => {
    try {
        const { firstname, lastname, city, taskname } = req.body
        if (!firstname || !lastname || !city || !taskname) {
            res.render('home', { failure_msg: 'Please click on add more and enter all fields before submitting' })
        }
        else {
            let newTask = new task_schema({
                firstname,
                lastname,
                city,
                taskname
            })

            let result = await newTask.save()
            console.log(result);
            res.render('home', { success_msg: 'Item added successfully' });
        }
    }

    catch (err) {
        res.render('home', { failure_msg: 'Error occurred while adding the task, Try again !!' })
        console.log(err + 'some error occurred and caught in catch block as :- ');
    }
}


const wrnURL = (req, res) => {
    res.send('<h1>This Page doesn\'t exist🚫</h1>');
}


module.exports = { homepage, add_new_task, wrnURL };