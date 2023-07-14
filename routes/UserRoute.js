const { getUser, createUser } = require("../controllers/UserController");

const router = require("express").Router();

//endpoint/api/service/
router.route("/").post(createUser);
router.route("/:email").get(getUser);

module.exports = router;
