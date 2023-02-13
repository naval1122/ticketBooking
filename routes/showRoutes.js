const router = require("express").Router();
const { addShow } = require("./showController");

router.post("/show", addShow);

module.exports = router;
