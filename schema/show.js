const mongoose = require("mongoose");
const theatre = require("./theatre");

const showSchema = new mongoose.Schema({
  showTime: {
    type: String,
    required: true,
  },
  showTheatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: theatre,
  },
  showDate: {
    type: Date,
  },
  numberOfSeats: {
    type: Number,
  },
});

const shows = mongoose.model("shows", showSchema);
module.exports = shows;
