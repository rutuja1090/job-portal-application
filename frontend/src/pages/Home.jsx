import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/jobs?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className="home">
      <p className="badge">🏆 No.1 Job Portal Website</p>

      <h1>
        Search Apply & <br />
        Get Your <span>Dream Job</span>
      </h1>

      <p className="sub">
        Start your Job Portal for the best, life-changing career opportunities from here
      </p>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Find Your Dream Job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      <h3 className="cat-title">Categories</h3>
      <p className="cat-sub">Explore our extensive job market</p>

      <div className="categories">
        <button onClick={() => navigate(`/jobs?search=Engineer`)}>Engineer</button>
        <button onClick={() => navigate(`/jobs?search=Cybersecurity`)}>Cybersecurity Engineer</button>
        <button onClick={() => navigate(`/jobs?search=Product Manager`)}>Product Manager</button>
      </div>
    </div>
  );
}

export default Home;
