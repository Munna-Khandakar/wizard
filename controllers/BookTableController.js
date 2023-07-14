const BookTableModal = require("../models/BookTableModal");

module.exports.createBooking = async (req, res) => {
  try {
    const book = new BookTableModal(req.body);
    book
      .save()
      .then((result) => {
        return res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
