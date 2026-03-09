
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JObDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ApplyForm from "./pages/ApplyForm";
import AdminDashboard from "./pages/admin/AdminDashBoard";
import AdminJobs from "./pages/admin/AdminJobs";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminLogin from "./pages/admin/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AppliedJobs from "./pages/AppliedJobs";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/apply/:id" element={<ApplyForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/jobs" element={<AdminJobs />} />
      <Route path="/admin/applications" element={<AdminApplications />} />
       <Route path="/admin/login" element={<AdminLogin />} /> 
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/applied-jobs" element={<AppliedJobs />} />

      </Routes>
    </>
  );
}

export default App;




