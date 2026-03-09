import express from "express";
import { applyJob, getUserApplications } from "../controllers/applyController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Submit new application
router.post("/apply", protect, applyJob);

// Get logged-in user's applications
router.get("/my-applications", protect, getUserApplications);

export default router;
