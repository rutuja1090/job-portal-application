import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import JobCard from "../components/JobCard";
import "./Jobs.css";

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);            // 🔹 backend jobs
  const [filteredJobs, setFilteredJobs] = useState([]);

  const location = useLocation();

  // 🔹 STEP 1: Fetch jobs from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setJobs(data.jobs);
          setFilteredJobs(data.jobs);
        }
      })
      .catch((err) => console.error("Jobs fetch error:", err));
  }, []);

  // 🔹 STEP 2: Search filter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search")?.toLowerCase() || "";

    if (!searchQuery) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(
        jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(searchQuery) ||
            job.company.toLowerCase().includes(searchQuery) ||
            job.location.toLowerCase().includes(searchQuery)
        )
      );
    }
  }, [location.search, jobs]);

  return (
    <div className="jobs-page">
      <h1 className="jobs-title">
        Available <span>Jobs</span>
      </h1>

      {filteredJobs.length === 0 ? (
        <p className="no-jobs">No jobs found matching your search.</p>
      ) : (
        <div className="job-list">
          {filteredJobs.map((job) => (
            <JobCard
              key={job._id}        // 🔹 MongoDB id
              job={job}
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Jobs;
