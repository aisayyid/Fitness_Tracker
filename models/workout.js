const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Creating schema for workouts.
const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
