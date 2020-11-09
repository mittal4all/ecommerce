const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    //Users.findByPk(req.user).then((result) => res.json(result));
    const user=await Users.findByPk(req.user);
    res.json(user.user_nam)
  } catch (error) {
    res.status(500).json("server error");
  }
});

module.exports = router;
