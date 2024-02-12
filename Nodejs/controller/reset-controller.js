const Reset = require("../model/reset-model");
const User = require("../model/user-model");
const nodemailer = require("nodemailer");

const resetController = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email: email });
   
    const resetToken = Math.floor(100000 + Math.random() * 900000);
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);
    const resetPassword = await Reset.create({
      email: email,
      resetToken: resetToken,
      expiryDate: expirationTime,
    });
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "garry15@ethereal.email",
        pass: "qQZfRR1Rut547uQDJe",
      },

    });

    async function main() {
      const info = await transporter.sendMail({
        from: "<garry15@ethereal.email>",
        to: `${email}`,
        subject: "To reset your password for Hostel Management System",
        text: `Hello ${userExist.username} your reset password token for  Hostel Management System is  ${resetToken} `,
      });
    }
    main().catch(console.error);
    res.status(200).json({ msg: resetPassword });
  } catch (error) {
    console.log(error);
  }
};
module.exports = resetController;
