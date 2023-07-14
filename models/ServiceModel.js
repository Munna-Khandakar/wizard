const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema(
  {
    food_name: {
      type: String,
    },
    food_star: {
      type: String,
    },
    food_vote: {
      type: String,
    },
    food_price: {
      type: String,
    },
    food_discount: {
      type: String,
    },
    food_desc: {
      type: String,
    },
    food_status: {
      type: String,
    },
    food_type: {
      type: String,
    },
    food_category: {
      type: String,
    },
    food_src: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("service", ServiceSchema);
