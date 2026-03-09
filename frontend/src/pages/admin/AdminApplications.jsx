import "./AdminApplications.css";


function AdminApplications() {
  return (
    <div className="admin-applications-container">
      <h2>Job Applications</h2>

      <table className="applications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rutuja Jadhav</td>
            <td>rutuja@gmail.com</td>
            <td>Software Engineer</td>
            <td>
              <span className="status pending">Pending</span>
            </td>
            <td>
              <button className="action-btn approve-btn">Approve</button>
              <button className="action-btn reject-btn">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminApplications;
