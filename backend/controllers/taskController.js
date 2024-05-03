const Task = require("../models/taskModel");

//create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

// Get/Read Task
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

// Get One Task
const getTask = async (req, res) => {
    
    try {
        const {id} = req.params;
        const task = await Task.findById(id)
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

// Delete task
const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id)
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send("Task deleted")
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
};

// Update task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndUpdate(
            // provide the id,
            {_id: id}, req.body, {
                new : true,
                runValidators: true,
            }
        )
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask,
}