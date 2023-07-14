const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    food_id: {
      type: String,
    },
    item_qty: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", CartSchema);
