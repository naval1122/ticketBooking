const Movies = require("../schema/movie");

const addMovie = async (req, res) => {
  try {
    const movieDetails = new Movies(req.body);
    const data = await movieDetails.save();
    return res.send({ success: true, message: "success", data: data });
  } catch (err) {
    return res.send({ success: false, message: "unsuccessful" });
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movies.find({ movieName: req.query.movieName });
    if (!movie) {
      return res
        .status(500)
        .json({ messsage: "couldn't find movie with this name" });
    } else {
      return res.status(200).json({ result: movie });
    }
  } catch (error) {
    return res.send(error);
  }
};

//

module.exports = {
  addMovie,
  getMovie,
};
