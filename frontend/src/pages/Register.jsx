// import React, { useState } from "react";
// import "./Register.css";
// import registerImage from "../assets/images/img.png";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     password: "",
//     role: "student", // default role
//   });

//   const [message, setMessage] = useState("");
//   const [messageColor, setMessageColor] = useState("red");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!form.firstName || !form.lastName || !form.email || !form.mobile || !form.password) {
//       setMessage("All fields are required");
//       setMessageColor("red");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       const data = await res.json();

//       if (data.success) {
//         setMessage("Registered successfully! Redirecting to login...");
//         setMessageColor("green");

//         setTimeout(() => {
//           navigate("/login"); // redirect to login page
//         }, 1500);
//       } else {
//         setMessage(data.message || "Registration failed");
//         setMessageColor("red");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Server error, try again");
//       setMessageColor("red");
//     }
//   };

//   return (
//     <div className="register-page">
//       <div className="register-container">
//         <div className="register-image">
//           <img src={registerImage} alt="Register Illustration" />
//         </div>

//         <div className="register-form">
//           <h2>Create Account</h2>

//           <div className="name-fields">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="contact-fields">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile"
//               value={form.mobile}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="password-fields">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//             />
//           </div>

//           <button className="register-btn" onClick={handleSubmit}>
//             Register
//           </button>

//           {message && <p style={{ color: messageColor }}>{message}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import "./Register.css";
import registerImage from "../assets/images/img.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    role: "student", // default role
  });

  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.firstName || !form.lastName || !form.email || !form.mobile || !form.password) {
      setMessage("All fields are required");
      setMessageColor("red");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Registered successfully! Redirecting to profile...");
        setMessageColor("green");

        // ✅ Redirect directly to profile instead of login
        setTimeout(() => {
          navigate("/profile");
        }, 1500);
      } else {
        setMessage(data.message || "Registration failed");
        setMessageColor("red");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error, try again");
      setMessageColor("red");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-image">
          <img src={registerImage} alt="Register Illustration" />
        </div>

        <div className="register-form">
          <h2>Create Account</h2>

          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="contact-fields">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="password-fields">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button className="register-btn" onClick={handleSubmit}>
            Register
          </button>

          {message && <p style={{ color: messageColor }}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Register;
