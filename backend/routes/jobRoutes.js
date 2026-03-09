import express from "express";
import {
  createJob,
  getAllJobs,
  getJobById,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.delete("/:id", deleteJob); // ✅

export default router;
