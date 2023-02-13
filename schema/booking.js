const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  theatreRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "theatres",
    required: true,
  },
  movieRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movies",
  },
  showRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shows",
  },
  noOfViewers: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
  },
  bookingType: {
    type: String,
    enum: ["NEW", "RESCHEDULE", "NOT VALID"],
    default: "NEW",
  },
});

const bookings = mongoose.model("bookings", bookingSchema);
module.exports = bookings;
