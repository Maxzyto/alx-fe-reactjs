import { Navigate } from "react-router-dom";

const useAuth = () => {
  return localStorage.getItem("auth") === "true"; // Simulated authentication
};

function ProtectedRoute({ children }) {
  return useAuth() ? children : <Navigate to="/" replace />;
}


export default ProtectedRoute;
