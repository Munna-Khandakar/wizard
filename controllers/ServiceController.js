const ServeModel = require("../models/ServiceModel");

module.exports.getServices = async (req, res) => {
  try {
    const services = await ServeModel.find({});
    return res.status(200).json(services);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.createService = async (req, res) => {
  try {
    const newService = new ServeModel(req.body);
    newService
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

module.exports.getService = async (req, res) => {
  try {
    //TODO   get servive by id
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.updateService = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ error: "Something went wrong" });
    const profileData = await ServeModel.findOneAndUpdate(
      {
        _id: req?.params?.id,
      },
      { $set: req.body },
      { new: true }
    );
    return res.status(201).json(profileData);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.deleteService = async (req, res) => {
  try {
    const deleteService = await ServeModel.findOneAndDelete(
      { _id: req?.params?.id },
      { new: true }
    );
    return res.status(203).json(deleteService);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
