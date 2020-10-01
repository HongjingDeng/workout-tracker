const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("./public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutsdb", { userNewUrlParser: true});

const db = require("./models");
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"));
app.listen(PORT, () => {
    console.log(`App running on link http://localhost:${PORT}`);
});

// mongodb+srv://workout-tracker:hongjing123@cluster0.ectr2.mongodb.net/workoutsdb?retryWrites=true&w=majority