const BillDetailsModal = require("../models/BillDetailsModal");

module.exports.createBillDetails = async (req, res) => {
  try {
    const billDetails = new BillDetailsModal(req.body);
    billDetails
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
module.exports.getBillDetailsById = async (req, res) => {
  try {
    const service = await BillDetailsModal.findById(req?.params?.id);
    return res.status(203).json(service);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
