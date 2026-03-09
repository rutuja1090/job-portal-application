import Job from "../models/Job.js";

// ➕ Add Job (Admin)
export const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({
      success: true,
      job,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📃 Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      jobs,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔍 Get single job
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json({ success: true, job });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ❌ Delete job (Admin)
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
