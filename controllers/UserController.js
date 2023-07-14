const UserModel = require("../models/UserModel");

module.exports.getUser = async (req, res) => {
  try {
    const service = await UserModel.findOne({
      user_email: req?.params?.email,
    });
    return res.status(203).json(service);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    newUser
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
