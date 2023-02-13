const Theatre = require("../schema/theatre");

const addTheatre = async (req, res) => {
  try {
    const theatreDetails = new Theatre(req.body);
    const data = await theatreDetails.save();
    return res.send({ success: true, message: "success", data: data });
  } catch (err) {
    return res.send({ success: false, message: "unsuccessful", error: err });
  }
};
const getTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.find({
      theatreLocation: req.query.location,
    });
    if (!theatre) {
      return res
        .status(500)
        .json({ messsage: "couldn't find any theatre in this location" });
    } else {
      return res.status(200).json({ result: theatre });
    }
  } catch (error) {
    return res.send(error);
  }
};

//
module.exports = {
  addTheatre,
  getTheatre,
};
