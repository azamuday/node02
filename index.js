require("dotenv").config();

const users = require("./api");

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
res.status(200).json(users);
});

app.post("/user", (req, res) => {

    const createUser = req.body;

    const test = users.push(createUser);

    res.status(200).json({message: "user create successfully", createUser});
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log("Application is running on port", PORT);
});