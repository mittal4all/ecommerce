const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenrators");
const Users = require("../models/Users");
const authorization=require("../middleware/authorization");
//user registration

router.post("/register", async (req, res) => {
  try {
    //1. destructure the req.body(name,email,password)
    var userObj = {
      user_nam: req.body.user_nam,
      user_email: req.body.user_email,
      user_password: req.body.user_password,
    };

    //2.check if user exist (if exist then throw error)
    const user = await Users.findAll({
      where: {
        user_email: userObj.user_email,
      },
    });
    if (user.length !== 0) {
      return res.send("This email address already register");
    }
    //3. bcrrypt password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(userObj.user_password, salt);
    console.log(bcryptPassword);
    //4.enter the new user into database
    var newUserObj = {
      user_nam: req.body.user_nam,
      user_email: req.body.user_email,
      user_password: bcryptPassword,
    };
    const newUser = await Users.create(newUserObj);

    //5. generating aur jwt token
    const token = jwtGenerator(newUser.id);
    res.json({ token });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    //1.destructure the req.body(name,email,password)
    var userObj = {
      user_email: req.body.user_email,
      user_password: req.body.user_password,
    };
    //2.check if user exist (if exist then throw error)
    const user = await Users.findAll({
      where: {
        user_email: userObj.user_email,
      },
    });
    if (user.length === 0) {
      return res.json("Email or Password is Incorrect");
    }

    //3.check the incoming password is same as database password
    const validpassword=await bcrypt.compare(userObj.user_password,user[0].user_password); //    it return boolean
    if(!validpassword){
        return res.json("Email or Password is Incorrect");
    }

    //4.give them jwt token
    const token = jwtGenerator(user[0].id);
    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/is-verify",authorization,async(req,res)=>{
    try {
        res.json(true);
    } catch (error) {
        res.status(500).send("server Error");
    }
})

module.exports = router;
