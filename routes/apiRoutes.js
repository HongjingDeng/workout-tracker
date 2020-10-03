const Router = require("express").Router();

Router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).sort({ day: -1 }).limit(1)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

Router.put("/api/workouts/", (req, res) => {
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