const express = require("express");
const {
  getallUser,
  addUsers,
  updateUser,
  deleteUser,
} = require("../controller/user");
const router = express.Router();
router.route("/alluser").get(getallUser);
router.route("/adduser").post(addUsers);
router.route("/updateuser").put(updateUser);
router.route("/deleteuser").delete(deleteUser);
module.exports = router;
