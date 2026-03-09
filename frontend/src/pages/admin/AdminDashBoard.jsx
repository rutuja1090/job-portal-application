import { Link, useNavigate } from "react-router-dom";
import "./Admin.css";
import { useEffect } from "react";

function AdminDashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  useEffect(() => {
    if (!role || role !== "admin") navigate("/admin/login");
  }, [role, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/admin/login");
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Dashboard</h1>
      <p className="admin-subtitle">
        Manage jobs and view applications from here
      </p>

      <div className="admin-cards">
        <Link to="/admin/jobs" className="admin-card">
          <h3>Manage Jobs</h3>
          <p>Add, edit or delete job listings</p>
        </Link>

        <Link to="/admin/applications" className="admin-card">
          <h3>View Applications</h3>
          <p>Check user job applications</p>
        </Link>
      </div>

      <button
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
