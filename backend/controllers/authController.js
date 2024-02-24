const User = require("../models/users");
const jwt = require("jsonwebtoken");

const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "panacea", { expiresIn: maxAge });
};

module.exports.register_post = async (req, res) => {
  try {
    let result = new User(req.body);
    let user = await result.save();
    const token = createToken(user._id);
    res.status(201).json({ user, token });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json("Email already exists" );
    } else {
      console.error(err);
      res.status(500).json("Internal server error" );
    }
  }
};

module.exports.login_post = async (req, res) => {
  try {
    const user = await User.login(req.body.Email, req.body.Password);
    if (!user) {
      return res.status(400).json( message= "Invalid credentials" );
    }
    const token = createToken(user._id);
    res.status(201).json({ currUser: user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};