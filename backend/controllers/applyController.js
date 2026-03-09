import Application from "../models/Application.js";

// Apply for a job
export const applyJob = async (req, res) => {
  try {
    const {
      job,                   // 🔹 jobId from frontend
      positionAppliedFor,
      fullName,
      email,
      phoneNumber,
      address,
      school,
      degree,
      yearCompleted,
      companyName,
      positionHeld,
      skills,
      referenceName,
      relationship,
      referencePhone,
    } = req.body;

    // Required fields check
    if (!job || !positionAppliedFor || !fullName || !email) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const application = await Application.create({
      user: req.user._id, // logged-in user
      job,                // 🔹 job id stored in MongoDB
      positionAppliedFor,
      fullName,
      email,
      phoneNumber: phoneNumber || "",
      address: address || "",
      school: school || "",
      degree: degree || "",
      yearCompleted: yearCompleted || "",
      companyName: companyName || "",
      positionHeld: positionHeld || "",
      skills: skills || "",
      referenceName: referenceName || "",
      relationship: relationship || "",
      referencePhone: referencePhone || "",
      status: "Pending",  // default status
    });

    return res.status(201).json({ success: true, application });
  } catch (err) {
    console.error("Apply Job Error:", err.message);
    return res.status(500).json({ message: "Server error, try again" });
  }
};

// Get all applications of logged-in user
export const getUserApplications = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const applications = await Application.find({ user: req.user._id }).populate("job");
    return res.status(200).json({ success: true, applications });
  } catch (err) {
    console.error("Get User Applications Error:", err.message);
    return res.status(500).json({ message: "Server error, try again" });
  }
};
