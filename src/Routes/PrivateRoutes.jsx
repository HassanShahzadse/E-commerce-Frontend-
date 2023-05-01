import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const userLoggedIn = localStorage.getItem("token");
  if (!userLoggedIn) {
    return (
      <Navigate to="/login" state={{ redirectedFrom: location }}></Navigate>
    );
  }
  return children;
};
export default PrivateRoutes;
