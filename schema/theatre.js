const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
  theatreName: {
    type: String,
    required: true,
  },
  theatreLocation: {
    type: String,
    required: true,
  },
});

const theatre = mongoose.model("theatres", theatreSchema);
module.exports = theatre;
