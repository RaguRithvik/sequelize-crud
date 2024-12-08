const User = require("../models/User");
//List All User
const getallUser = async (req, res, next) => {
  try {
    const result = await User.findAll();
    res.status(200).json({ records: result });
  } catch {
    // next(error);
  }
};
//Add user
const addUsers = async (req, res, next) => {
  try {
    const { email, phone } = req.body;
    const result = await User.create({ email, phone });
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
    // next(error);
  }
};
//Update user
const updateUser = async (req, res, next) => {
  try {
    const { email, phone, id } = req.body;
    const result = await User.findOne({ where: { id } });
    if (result) {
      await User.update({ email, phone }, { where: { id } });
      res.status(200).json({ message: "User details updated" });
    } else {
      res.status(404).json({ message: "No user found with this ID" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
//Delete user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.body;
    const result = await User.findOne({ where: { id } });
    if (result) {
      await User.destroy({ where: { id } });
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "No user found with this ID" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
module.exports = { getallUser, addUsers, updateUser, deleteUser };
