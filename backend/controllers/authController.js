// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// // REGISTER
// export const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, mobile, role } = req.body;

//     if (!firstName || !lastName || !email || !password || !mobile) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const exists = await User.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     await User.create({
//       firstName,
//       lastName,
//       email,
//       password,
//       mobile,
//       role: role || "student",
//     });

//     res.status(201).json({
//       success: true,
//       message: "Registered successfully",
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // LOGIN
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email & password required" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//       success: true,
//       token,
//       role: user.role,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };




import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobile, role } = req.body;

    if (!firstName || !lastName || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    await User.create({
      firstName,
      lastName,
      email,
      password, // hashed in model
      mobile,
      role: role || "student",
    });

    res.status(201).json({
      success: true,
      message: "Registered successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET LOGGED-IN USER
export const getMe = async (req, res) => {
  try {
    const user = req.user; // attached by authMiddleware
    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
