const router = require("express").Router();
const { addTheatre, getTheatre } = require("./theatreController");

router.post("/theatre", addTheatre);
router.get("/getTheatre", getTheatre);

module.exports = router;
