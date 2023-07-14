const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    book_name: {
      type: String,
    },
    book_phone: {
      type: String,
    },
    book_people: {
      type: String,
    },
    book_tables: {
      type: String,
    },
    user_id: {
      type: String,
    },
    book_when: {
      type: String,
    },
    book_note: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookTable", BookSchema);
