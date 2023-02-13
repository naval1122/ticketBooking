const Booking = require("../schema/booking");
const Show = require("../schema/show");

const booking = async (req, res) => {
  try {
    const showDetails = await Show.findById(req.body.showRef);
    if (showDetails.numberOfSeats >= req.body.noOfViewers) {
      const showSeatUpdate = await Show.findOneAndUpdate(
        { _id: req.body.showRef },
        {
          $set: {
            numberOfSeats: showDetails.numberOfSeats - req.body.noOfViewers,
          },
        }
      );
      req.body.seatNumber = req.body.seatNumber.toString();
      const bookingDetails = new Booking(req.body);
      const data = await bookingDetails.save();
      return res.send({ success: true, message: "success", data: data });
    } else {
      return res.send({ success: false, message: "Seats not available" });
    }
  } catch (err) {
    return res.send({ success: false, message: "unsuccessful", error: err });
  }
};

const rescheduleBooking = async (req, res) => {
  try {
    const showDetails = await Show.findById(req.body.showRef);
    const bookedShowDetails = await Show.findById(req.body.bookedShowRef);
    if (showDetails.numberOfSeats >= req.body.noOfViewers) {
      const showSeatUpdate = await Show.findOneAndUpdate(
        { _id: req.body.showRef },
        {
          $set: {
            numberOfSeats: showDetails.numberOfSeats - req.body.noOfViewers,
          },
        }
      );
      const bookedShowSeatUpdate = await Show.findOneAndUpdate(
        { _id: req.body.bookedShowRef },
        {
          $set: {
            numberOfSeats:
              bookedShowDetails.numberOfSeats + req.body.noOfViewers,
          },
        }
      );
      const oldBookingUpdate = await Booking.findOneAndUpdate(
        { _id: req.body.oldBookingId },
        { $set: { bookingType: "NOT VALID" } }
      );
      const bookingObj = {
        theatreRef: req.body.theatreRef,
        movieRef: req.body.movieRef,
        showRef: req.body.showRef,
        noOfViewers: 6,
        seatNumber: req.body.seatNumber.toString(),
        bookingType: "RESCHEDULE",
      };
      const bookingDetails = new Booking(bookingObj);
      const data = await bookingDetails.save();
      return res.send({ success: true, message: "success", data: data });
    } else {
      return res.send({ success: false, message: "Seats not available" });
    }
  } catch (err) {
    return res.send({ success: false, message: "unsuccessful", error: err });
  }
};

module.exports = {
  booking,
  rescheduleBooking,
};
