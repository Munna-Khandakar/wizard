const CartItemModel = require("../models/CartItemModel");

//!done
module.exports.addItems = async (req, res) => {
  try {
    const newCart = new CartItemModel(req.body);
    newCart
      .save()
      .then((result) => {
        return res.status(201).json(result);
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).json({ error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

//!done
module.exports.getItem = async (req, res) => {
  try {
    const service = await CartItemModel.findOne({
      user_id: req?.params?.user_id,
      food_id: req?.params?.service_id,
    });
    return res.status(203).json(service);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

//!done
module.exports.allItems = async (req, res) => {
  try {
    const service = await CartItemModel.find({
      user_id: req?.params?.id,
    });
    return res.status(203).json(service);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

//!done
module.exports.updateItem = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ error: "Something went wrong" });

    const cartData = await CartItemModel.findOneAndUpdate(
      {
        user_id: req?.body?.user_id,
        food_id: req?.body?.service_id,
      },
      { $set: req.body },
      { new: true }
    );
    return res.status(201).json(cartData);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong-1" });
  }
};

//!done
module.exports.deleteItem = async (req, res) => {
  try {
    const deleteService = await CartItemModel.findOneAndDelete(
      { user_id: req?.params?.user_id, food_id: req.params?.service_id },
      { new: true }
    );
    return res.status(203).json(deleteService);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
//!done
module.exports.deleteItems = async (req, res) => {
  try {
    const deleteService = await CartItemModel.findOneAndDelete(
      { user_id: req?.params?.id },
      { new: true }
    );
    return res.status(203).json(deleteService);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};
