import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext, useState } from "react";

const Logout = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const handleLogout = async () => {
    const token = localStorage.getItem("authToken");
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/logout/`;

    setLoading(true); // Set loading state to true

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (res.ok) {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
        setIsLoggedIn(false);
        console.log("successfully logged out user");
        navigate("/SignIn");
      } else {
        console.error("Logout Failed: ", res.statusText);
      }
    } catch (error) {
      console.error("error during log out: ", error);
    } finally {
      setLoading(false); // Set loading state back to false after the request
    }
  };

  return (
    <div className="bg-red-900">
      <button
        className="text-lg text-white cursor-pointer"
        onClick={handleLogout}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};

export default Logout;
