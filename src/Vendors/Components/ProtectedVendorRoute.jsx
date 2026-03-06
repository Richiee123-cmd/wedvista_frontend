import { Navigate } from "react-router-dom";

function ProtectedVendorRoute({ children }) {
  const isVendor = localStorage.getItem("vendor");

  return isVendor ? children : <Navigate to="/vendor/login" />;
}

export default ProtectedVendorRoute; 
