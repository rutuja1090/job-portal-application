import { useNavigate } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job, selectedJob, setSelectedJob }) {
  const navigate = useNavigate();

  return (
    <div
      className={`job-card ${selectedJob === job._id ? "active" : ""}`}
      onClick={() => setSelectedJob(job._id)}
    >
      <div className="job-header">
        <div className="job-logo">
          {job.company[0].toUpperCase()}
        </div>
        <div>
          <h3>{job.title}</h3>
          <p className="company-name">
            {job.company} • {job.location}
          </p>
        </div>
      </div>

      <p className="job-info">{job.info}</p>

      <div className="job-tags">
        <span>{job.location}</span>
        <span>{job.company}</span>
      </div>

      <div className="job-card-buttons">
        <button
          className="details-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/jobs/${job._id}`);
          }}
        >
          Details
        </button>

        <button
          className="apply-btn"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/apply/${job._id}`);
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;
