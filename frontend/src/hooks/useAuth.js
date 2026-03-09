import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Hook to access AuthContext easily
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;  // ✅ default export
