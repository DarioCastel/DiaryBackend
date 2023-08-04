const router = require("express").Router();
const bcrypt = require("bcryptjs");
const moment = require("moment");
const jwt = require("jwt-simple");
const Login = require("../models/Login");

//create a user
router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const data = await Login.create(req.body);
    if (!data) {
      throw new Error("and error occurred during the creation");
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "and error occurred during the creation" });
  }
});

//login
router.post("/login", async (req, res) => {
  const user = await Login.findOne({ username: req.body.username });
  if (user) {
    const equal = bcrypt.compareSync(req.body.password, user.password);
    if (equal) {
      res.json({ succsess: createToken(user) });
    } else {
      res.json({ error: "the user or password are invalid" });
    }
  } else {
    res.json({ error: "the user or password are invalid" });
  }
});


const createToken = (user) => {
  const payLoad = {
    userId: user._id,
    createAt: moment().unix(),
    expireAt: moment().add(5, "minutes").unix(),
  };
  return jwt.encode(payLoad, "contracontra");
};

module.exports = router;
