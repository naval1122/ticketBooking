const router = require("express").Router();
const { addShow } = require("../controllers/showController");

router.post("/show", addShow);

module.exports = router;
