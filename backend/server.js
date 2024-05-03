const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
//const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');


const app = express();

const PORT = process.env.PORT || 4000;

//Middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: ["http://localhost:3000",]
}
));

app.use("/api/tasks",taskRoutes);



// Routes
app.get("/", (req, res) => {
    res.send("<center><h2>Welcome to our Homepage.</h2></center>");
});




mongoose
    .connect(process.env.MONGO_URI)
    .then(() =>{
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })
