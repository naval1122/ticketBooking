const express = require("express");
const app = express();
const db = require("./dbConnection");
const theatreRoutes = require("./routes/theatreRoutes");
const movieRoutes = require("./routes/movieRoutes");
const showRoutes = require("./routes/showRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const PORT = 5000;
app.use(express.json());
app.use(theatreRoutes);
app.use(movieRoutes);
app.use(showRoutes);
app.use(bookingRoutes);

app.listen(PORT, "127.0.0.1", () => {
  console.log(`server is listening at ${PORT}`);
});
