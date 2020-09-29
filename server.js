const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { userNewUrlParser: true});

const db = require("./models");

app.get("/",(req,res) => {
    res.sendFile(path.join(_dirname, "./pulic/index.html"));
});

db.User.create({name: "Hongjing"})

app.listen(PORT, () => {
    console.log('App running on link http://localhost:'${PORT}');
});
