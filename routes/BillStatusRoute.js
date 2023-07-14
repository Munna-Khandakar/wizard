const {
  createBillStatus,
  getAllBills,
  updateBillStatus,
  updateBillPaid,
  cancelBillStatus,
  showNewestStatusId,
  getAllBillsByUser,
  getAllBillsByBill,
} = require("../controllers/BillStatusController");

const router = require("express").Router();

router.route("/").post(createBillStatus).get(getAllBills);
router.put("/:id", updateBillStatus);
router.put("/paid/:id", updateBillPaid);
router.put("/cancel/:id", cancelBillStatus);
router.get("/new", showNewestStatusId);
router.get("/user/:id", getAllBillsByUser);
router.get("/bill/:id", getAllBillsByBill);

// router.route("/:id").get(getBillDetailsById);

module.exports = router;
