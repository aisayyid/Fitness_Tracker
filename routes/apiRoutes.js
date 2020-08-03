const router = require("express").Router();
const Workout = require("../models/workout");

// You will need at least Four (4) api routes:
// - GET ( "/api/workouts" ) - Get all workouts
// - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// - GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page.
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// - POST ( "/api/workouts" ) - Create a new Workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
// - PUT ( "/api/workouts/:id" ) - Update a Workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
module.exports = router;