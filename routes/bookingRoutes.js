const router = require("express").Router();
const {
  booking,
  rescheduleBooking,
} = require("../controllers/bookingController");

router.post("/booking", booking);
router.post("/rescheduleBooking", rescheduleBooking);

module.exports = router;
