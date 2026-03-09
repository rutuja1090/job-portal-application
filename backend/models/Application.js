import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // logged-in user
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true }, // applied job

    positionAppliedFor: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: String,
    phoneNumber: String,
    email: {
      type: String,
      required: true,
    },

    school: String,
    degree: String,
    yearCompleted: String,

    companyName: String,
    positionHeld: String,
    employmentDates: String,

    skills: String,

    referenceName: String,
    relationship: String,
    referencePhone: String,

    status: { type: String, default: "Pending" }, // application status
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
