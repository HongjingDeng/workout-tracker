const Router = require("express").Router();
const path = require("path");

Router.get("/",(req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

Router.get("/stats",(req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

Router.get("/exercise",(req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});





module.exports = Router;