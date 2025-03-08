import registerSchema from "../middlewares/register.middleware.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists. Kindly login" });
    }

    const value = await registerSchema.validateAsync(req.body);

    if (!value) {
      res.status(400).json({ message: "Incorrect Format." });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create(req.body);
    newUser.password = hashPassword;

    newUser.save();

    res.status(200).json("User created successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default register;
