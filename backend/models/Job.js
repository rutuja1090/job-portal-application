import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship"],
      default: "Full-Time",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
