const Router = require("express").Router();
//Bring in models
const db = require("../models");

//get last workouts
Router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({ day: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//add exercise
Router.put("/api/workouts/:id", (req, res) => {
    let urlData = req.params;
    let data = req.body;

    db.Workout.updateOne({ _id: urlData.id }, {
        $push: {
            exercises: [
                {
                    "type": data.type,
                    "name": data.name,
                    "duration": data.duration,
                    "distance": data.distance,
                    "weight": data.weight,
                    "reps": data.reps,
                    "sets": data.sets
                }
            ]
        }
    }).then(dbUpdate => {
        res.json(dbUpdate);
    })
        .catch(err => {
            res.json(err);
        });
});

//create workouts
Router.post("/api/workouts", (req, res) => {
    let data = req.body;

    db.Workout.create({
        day: new Date().setDate(new Date().getDate())
    }).then(dbUpdate => {
        res.json(dbUpdate);
    })
        .catch(err => {
            res.json(err);
        });
});

//// Gets workouts in range
Router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = Router;