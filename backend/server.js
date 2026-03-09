import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applyRoutes from "./routes/applyRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // ✅ must-have

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applyRoutes);

app.get("/", (req, res) => res.send("Job Portal Backend Running 🚀"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
    app.listen(5000, () => console.log("Server running on port 5000 🚀"));
  })
  .catch((err) => console.error("MongoDB Connection Error:", err.message));
