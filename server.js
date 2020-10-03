const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");

require('dotenv/config');
const connectDB = require("./config/connectDB.js");


app.use(express.static("./public"))
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { userNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));

connectDB();

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:${PORT}`);
});

// mongodb+srv://workout-tracker:hongjing123@cluster0.ectr2.mongodb.net/workoutsdb?retryWrites=true&w=majority