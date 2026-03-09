import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!role) navigate("/login"); // not logged in
    if (role === "admin") navigate("/admin"); // redirect admin
  }, [role, navigate]);

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Student Dashboard</h1>
      <p className="dashboard-subtitle">Welcome, {role}</p>

      <div className="dashboard-cards">
        <div
          className="dashboard-card"
          onClick={() => navigate("/jobs")}
        >
          <h3>View Jobs</h3>
          <p>Browse available job listings</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/applied-jobs")}
        >
          <h3>Applied Jobs</h3>
          <p>Check your job applications</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/profile")}
        >
          <h3>Profile</h3>
          <p>Update personal information</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
