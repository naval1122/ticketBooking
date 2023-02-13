const router = require("express").Router();
const { booking, rescheduleBooking } = require("./bookingController");

router.post("/booking", booking);
router.post("/rescheduleBooking", rescheduleBooking);

module.exports = router;
