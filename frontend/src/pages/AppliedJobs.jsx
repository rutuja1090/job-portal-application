import React, { useEffect, useState } from "react";
import "./AppliedJobs.css";

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/applications/my-applications", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setApplications(data.applications);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 style={{ padding: "30px" }}>Loading applied jobs...</h3>;
  }

  return (
    <div className="applied-page">
      <h2 className="applied-title">My Applied Jobs</h2>

      {applications.length === 0 ? (
        <p className="no-apps">You haven’t applied for any jobs yet.</p>
      ) : (
        applications.map((app) => (
          <div key={app._id} className="applied-card">
            <h3>{app.positionAppliedFor}</h3>
            <p><b>Company:</b> {app.companyName}</p>
            <p><b>Status:</b> {app.status}</p>
            <p><b>Applied On:</b> {new Date(app.createdAt).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AppliedJobs;
