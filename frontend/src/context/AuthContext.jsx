// import { createContext, useState } from "react";

// export const AuthContext = createContext(); // ✅ named export

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   const login = (token, user) => {
//     setToken(token);
//     setUser(user);
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider; // default export for wrapping

import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = (data) => {
    setUser(data); // data = { firstName, lastName, email, mobile }
  };

  return (
    <AuthContext.Provider value={{ user, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
