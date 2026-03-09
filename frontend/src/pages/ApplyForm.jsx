import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ApplyForm.css";

const ApplyForm = () => {
  const { id } = useParams(); // 🔹 jobId from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    positionAppliedFor: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    school: "",
    degree: "",
    yearCompleted: "",
    companyName: "",
    positionHeld: "",
    skills: "",
    referenceName: "",
    relationship: "",
    referencePhone: "",
  });

  const [message, setMessage] = useState("");
  const [color, setColor] = useState("green");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Please login first");
      setColor("red");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/applications/apply",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            job: id,         // 🔹 Send jobId to backend
            ...formData,
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setMessage("✅ Application submitted successfully");
        setColor("green");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1200);
      } else {
        setMessage(data.message || "Application failed");
        setColor("red");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again");
      setColor("red");
    }
  };

  return (
    <div className="apply-page">
      <form className="apply-form" onSubmit={handleSubmit}>
        <h2 className="form-title">JOB APPLICATION FORM</h2>

        {message && <p style={{ color }}>{message}</p>}

        <input
          type="text"
          name="positionAppliedFor"
          placeholder="Position Applied For"
          onChange={handleChange}
          required
        />

        <h3>Personal Information</h3>
        <div className="row">
          <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input name="address" placeholder="Address" onChange={handleChange} />
        </div>

        <div className="row">
          <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
          <input name="email" placeholder="Email Address" onChange={handleChange} required />
        </div>

        <h3>Education</h3>
        <div className="row">
          <input name="school" placeholder="School / Institution" onChange={handleChange} />
          <input name="degree" placeholder="Degree / Certification" onChange={handleChange} />
          <input name="yearCompleted" placeholder="Year Completed" onChange={handleChange} />
        </div>

        <h3>Recent Employment</h3>
        <div className="row">
          <input name="companyName" placeholder="Company Name" onChange={handleChange} />
          <input name="positionHeld" placeholder="Position Held" onChange={handleChange} />
        </div>

        <h3>Skills</h3>
        <textarea name="skills" placeholder="List your skills" onChange={handleChange}></textarea>

        <h3>Reference</h3>
        <div className="row">
          <input name="referenceName" placeholder="Reference Name" onChange={handleChange} />
          <input name="relationship" placeholder="Relationship" onChange={handleChange} />
          <input name="referencePhone" placeholder="Phone Number" onChange={handleChange} />
        </div>

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyForm;
