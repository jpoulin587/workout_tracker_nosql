const router = require("express").Router();
const Workout = require("../models/workout");
//const path = require('path');

router.get("/api/workouts", (req, res)=> {
    Workout.find()
        .then (workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts/range", (req, res)=> {
    Workout.find({})
        .then (workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((workout) => {
      res.json(workout);
    }).catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
