const BillStatusModel = require("../models/BillStatusModel");

module.exports.showNewestStatusId = async (req, res) => {
  try {
    const orderInfo = await BillStatusModel.find().sort({ updatedAt: 1 });
    return res.status(200).json(orderInfo);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.createBillStatus = async (req, res) => {
  try {
    const status = new BillStatusModel(req.body);
    status
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

module.exports.getAllBillsByUser = async (req, res) => {
  try {
    const data = await BillStatusModel.find({
      user_id: req.params?.id,
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.getAllBillsByBill = async (req, res) => {
  try {
    const data = await BillStatusModel.find({
      bill_id: req.params?.id,
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.getAllBills = async (req, res) => {
  try {
    const data = await BillStatusModel.find({});
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.updateBillStatus = async (req, res) => {
  try {
    const billData = await BillStatusModel.findOneAndUpdate(
      {
        bill_id: req?.params?.id,
      },
      {
        $inc: {
          bill_status: 1,
        },
      },
      { new: true }
    );
    return res.status(201).json(billData);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.updateBillPaid = async (req, res) => {
  try {
    const billData = await BillStatusModel.findOneAndUpdate(
      {
        bill_id: req?.params?.id,
      },
      {
        bill_paid: "true",
      },
      { new: true }
    );
    return res.status(201).json(billData);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.cancelBillStatus = async (req, res) => {
  try {
    const billData = await BillStatusModel.findOneAndUpdate(
      {
        bill_id: req?.params?.id,
      },
      {
        bill_status: 0,
        bill_paid: "false",
      },
      { new: true }
    );
    return res.status(201).json(billData);
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
