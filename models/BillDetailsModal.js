const mongoose = require("mongoose");

const BillDetailsSchema = mongoose.Schema(
  {
    // bill_id: {
    //   type: String,
    // },
    food_id: {
      type: String,
    },
    item_qty: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("billDetails", BillDetailsSchema);
