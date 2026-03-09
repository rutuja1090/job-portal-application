import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Job Details</h1>
      <p><strong>Job ID:</strong> {id}</p>

      <p>
        This page will show full job description,
        salary, experience and skills.
      </p>
    </div>
  );
}

export default JobDetails;
