const users = require("../models/users");
const bcrypt = require("bcrypt");
//login user
exports.login = async (req, res) => {
  const isEmailthere = await users.findOne({ email: req.body.email });

  if (isEmailthere === null) {
    return res.json({
      status: false,
      message: "User is not present please sigin",
    });
  } else {
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      isEmailthere.password
    );

    if (checkPassword) {
      return res.json({
        status: true,
        message: "logged in",
      });
    } else {
      return res.json({ status: false, message: "Incorrect password" });
    }
  }
};

//create user
exports.createUser = async (req, res) => {
  const isUserPresent = await users.findOne({ email: req.body.email });

  if (isUserPresent !== null) {
    return res.json({ status: false, message: "User is already present" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await users.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    return res.json({
      status: true,
      message: "logged in",
    });
  }
};