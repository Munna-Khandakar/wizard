const {
  createBillDetails,
  getBillDetailsById,
} = require("../controllers/BillDetailsController");

const router = require("express").Router();

router.route("/").post(createBillDetails);
router.route("/:id").get(getBillDetailsById);

module.exports = router;
