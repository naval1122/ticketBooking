const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/ticketbooking";
mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.log("not connected" + err);
  });
