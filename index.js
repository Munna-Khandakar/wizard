const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MONGO_URI } = require("./config/keys");

//TODO: MIDDLEWARE

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: Routes

app.use("/api/services", require("./routes/ServiceRoute"));
app.use("/api/users", require("./routes/UserRoute"));
app.use("/api/cartItem", require("./routes/CartItemRoute"));
app.use("/api/billdetails", require("./routes/BillDetailsRoute"));
app.use("/api/booking", require("./routes/BookTableRoute"));

const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });

module.exports = app;
