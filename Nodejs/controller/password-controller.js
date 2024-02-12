const User = require("../model/user-model");
const Reset = require("../model/reset-model");
const bcrypt = require("bcrypt");

const password = async (req, res) => {
  try {
    const { email, password, resetToken } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    const resetExist = await Reset.findOne({
      resetToken: resetToken,
      email: email,
    });
    if (!resetExist) {
      return res.status(400).json({ message: "Invalid reset token" });
    }
    await User.updateOne(
      { email },
      {
        $set: { password: hash_password },
      }
    );
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = password;
