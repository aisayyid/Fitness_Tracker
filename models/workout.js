const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Creating schema for workouts.
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter your exercise of choice"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of your exercise."
      },
      duration: Number,

      weight: Number,

      reps: Number,

      sets: Number,

      distance: Number,

    }
  ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
