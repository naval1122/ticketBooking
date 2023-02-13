const router = require("express").Router();
const { addMovie, getMovie } = require("./movieController");

router.post("/movie", addMovie);
router.get("/getMovie", getMovie);

module.exports = router;
