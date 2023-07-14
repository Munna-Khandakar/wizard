const { createBooking } = require("../controllers/BookTableController");

const router = require("express").Router();

router.route("/").post(createBooking);

module.exports = router;
