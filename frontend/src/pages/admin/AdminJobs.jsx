import { useState } from "react";
import "./AdminJobs.css";

function AdminJobs() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleAddJob = () => {
    alert("Job Added (backend connect later)");
  };

  return (
    <div className="admin-jobs-container">
      <h2>Add Job</h2>

      <input
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
}

export default AdminJobs;
