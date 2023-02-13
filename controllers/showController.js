const Show = require("../schema/show");

const addShow = async (req, res) => {
  try {
    const showDetails = new Show(req.body);
    const data = await showDetails.save();
    return res.send({ success: true, message: "success", data: data });
  } catch (err) {
    return res.send({ success: false, message: "unsuccessful" });
  }
};

module.exports = {
  addShow,
};
