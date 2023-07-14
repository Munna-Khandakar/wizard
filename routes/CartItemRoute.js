const {
  addItems,
  updateItem,
  allItems,
  deleteItems,
  getItem,
  deleteItem,
} = require("../controllers/CartItemController");

const router = require("express").Router();

//   //endpoint/api/service/
router.route("/").post(addItems).put(updateItem);
router.route("/:id").get(allItems).delete(deleteItems);
router.route("/:user_id/:service_id").get(getItem).delete(deleteItem);

module.exports = router;
