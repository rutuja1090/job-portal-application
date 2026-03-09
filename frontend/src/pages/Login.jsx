// import React, { useState } from "react";
// import "./Login.css";
// import loginImage from "../assets/images/login.jpg";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [message, setMessage] = useState("");
//   const [messageColor, setMessageColor] = useState("red");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       setMessage("Both fields are required");
//       setMessageColor("red");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.success) {
//         // Save token & role
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("role", data.role);

//         setMessage("Login successful! Redirecting...");
//         setMessageColor("green");

//         setTimeout(() => {
//           navigate("/dashboard"); // redirect to dashboard
//         }, 1500);
//       } else {
//         setMessage(data.message || "Invalid credentials");
//         setMessageColor("red");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Server error, try again");
//       setMessageColor("red");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-image">
//           <img src={loginImage} alt="Login Illustration" />
//         </div>

//         <div className="login-form">
//           <h2>Sign In</h2>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//           />

//           <div className="remember-me">
//             <input type="checkbox" id="remember" />
//             <label htmlFor="remember">Remember me</label>
//           </div>

//           <button className="login-btn" onClick={handleSubmit}>
//             Log In
//           </button>

//           {message && <p style={{ color: messageColor }}>{message}</p>}

//           <p className="signup-link">
//             Don't have an account? <a href="/register">Register</a>
//           </p>

//           <p className="social-login">Or login with</p>
//           <div className="social-icons">
//             <button className="facebook">F</button>
//             <button className="twitter">T</button>
//             <button className="google">G</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import loginImage from "../assets/images/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.email || !form.password) {
      setMessage("Both fields are required");
      setMessageColor("red");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Save token & role
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        setMessage("Login successful! Redirecting...");
        setMessageColor("green");

        setTimeout(() => {
          // Redirect based on role
          if (data.role === "admin") navigate("/admin");
          else navigate("/dashboard");
        }, 500);
      } else {
        setMessage(data.message || "Invalid credentials");
        setMessageColor("red");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again");
      setMessageColor("red");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left image */}
        <div className="login-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>

        {/* Right form */}
        <div className="login-form">
          <h2>Sign In</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="login-btn" onClick={handleSubmit}>
            Log In
          </button>

          {message && <p style={{ color: messageColor, marginTop: "10px" }}>{message}</p>}

          <p className="signup-link">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
