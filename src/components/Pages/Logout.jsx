import { useAuth } from "../../AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  if (window.aptrinsic) window.aptrinsic("reset");
  useEffect(() => {
    if (window.aptrinsic) window.aptrinsic("reset");
    logout(); // Clear authentication state

    //navigate("/login"); // Redirect to home or login page
  }, [logout, navigate]);

  return null; // This component doesn't render anything
};

export default Logout;
