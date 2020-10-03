const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const bodyParser = require('body-parser');
// const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
//const db = require("./models");

require('dotenv').config();
//const db = require("./config/connectDB.js");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"))
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { useNewUrlParser: true });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/apiRoutes.js"));

//connectDB();

app.listen(PORT, () => {
    console.log(`App running on link http://localhost:${PORT}`);
});
