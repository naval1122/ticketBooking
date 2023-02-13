const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },
  movieTheatre: {
    type: mongoose.Schema.Types.ObjectId,
  },
  movieDate: {
    type: Date,
  },
});

const movies = mongoose.model("movies", moviesSchema);
module.exports = movies;
