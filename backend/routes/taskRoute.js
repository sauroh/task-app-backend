const cors = require('cors');
const express = require('express');
const Task = require('../models/taskModel');
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController');


const router = express.Router();

// sample compress pipeline
//router.route("/").get(getTask).post(createTask)
//router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

//create a Task
router.post("/", createTask);

// Get/Read All Task
router.get("/", getTasks);

// Get One Task
router.get("/:id", getTask);

// Delete a Task
router.delete("/:id", deleteTask);

// Update a Task
router.put("/:id", updateTask);
//router.patch("/api/tasks/:id", updateTask);

module.exports = router;