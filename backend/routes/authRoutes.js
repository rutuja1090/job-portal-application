import express from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js"; // token verify middleware

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// New route for getting logged-in user data
router.get("/me", protect, getMe);

export default router;
