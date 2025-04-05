const User = require("../../models/userModel");
const sendEmail = require("../../utils/sendEmail");
const bcrypt = require('bcryptjs')
exports.sendOtp = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    await sendEmail(
        email,
        "Password Reset OTP",
        `Hi ${user.name},\nYour OTP is: ${otp}\nIt will expire in 10 minutes.`
    );

    res.status(200).json({ message: "OTP sent to your email" });
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || Date.now() > user.otpExpiry)
        return res.status(400).json({ message: "Invalid or expired OTP" });

    res.status(200).json({ message: "OTP verified" });
};

exports.resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    user.password = hashedPassword;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.status(200).json({ message: "Password has been reset successfully" });
};