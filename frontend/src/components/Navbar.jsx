import { Link } from "react-router-dom";
import "./Navbar.css";
import profileImg from "../assets/images/download.png"; // तुमच्या profile image path ला match करा

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Job <span>Portal</span></div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="btn">Register</Link>

        {/* Profile Image with Link */}
        <Link to="/profile" className="profile">
          <img src={profileImg} alt="Profile" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
