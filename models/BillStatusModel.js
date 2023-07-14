const mongoose = require("mongoose");

const BillStatusSchema = mongoose.Schema(
  {
    bill_id: {
      type: String,
    },
    user_id: {
      type: String,
    },
    bill_phone: {
      type: String,
    },
    bill_address: {
      type: String,
    },
    bill_when: {
      type: String,
    },
    bill_method: {
      type: String,
    },
    bill_discount: {
      type: String,
    },
    bill_delivery: {
      type: String,
    },
    bill_total: {
      type: String,
    },
    bill_paid: {
      type: String,
    },
    bill_status: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("billstatus", BillStatusSchema);
