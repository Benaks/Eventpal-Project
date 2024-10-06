import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/Standing.png";
import Button from "../utils/Button";
import GoogleLogo from "../../assets/icons8-google.svg";
import Footer from "../footers/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "./AuthContext";
import { MutatingDots } from "react-loader-spinner"; // Importing loader spinner

const InputField = ({ name, type, value, placeholder, onChange }) => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
    required
  />
);

const Signin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // New loading state
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { username, email, password } = userData;

  // Validation: Check if any input is empty
  if (!username || !email || !password) {
    setError("Please fill in all the fields.");
    return;
  }

  const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/login/`;

  // Set loading to true before the API call
  setIsLoading(true);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username, // Ensure you are sending the username
        email: email, // And the email
        password: password, // With the password
      }),
    });

    if (res.ok) {
      const result = await res.json();
      const token = result.key;
      localStorage.setItem("authToken", token);
      setIsLoggedIn(true);
      setUserData({ username: "", email: "", password: "" });
      setError(""); // Clear any errors
      navigate("/localevents");
    } else {
      const errorData = await res.json();
      let errorMessages = "";

      Object.keys(errorData).forEach((key) => {
        if (Array.isArray(errorData[key])) {
          errorMessages += errorData[key].join(", ") + " ";
        } else {
          errorMessages += errorData[key] + " ";
        }
      });

      setError(errorMessages.trim() || "An error occurred during login.");
    }
  } catch (error) {
    console.error("Login error: ", error);
    setError("Network error or unexpected issue. Please try again.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="font-poppins">
      <Link to="/" className="p-4">
        <AiOutlineArrowLeft className="cursor-pointer font-bold text-black text-2xl" />
      </Link>
      <main className="flex justify-center lg:justify-around items-center bg-signin-image lg:bg-none bg-center bg-contain bg-no-repeat w-[90%] mx-auto">
        <div className="hidden lg:w-[60%] lg:flex justify-center items-center">
          <img src={SignInImg} alt="Sign-up-hero-image" className="w-[55%]" />
        </div>
        <div className="w-[90%] md:w-1/2 lg:w-[30%] relative z-10">
          <h1 className="text-1xl font-bold cursor-pointer sh pb-3">
            <Link to="/">
              <span className="text-secondary">e</span>ventrybe
            </Link>
          </h1>
          <div className="my-3">
            <h1 className="capitalize text-black font-bold text-2xl my-4">
              log in
            </h1>
            <p className="text-slate-400 text-sm">
              Enter your personal details to get started
            </p>
          </div>
          <form
            className="flex flex-col justify-around items-center my-10"
            onSubmit={handleSubmit}
          >
            <InputField
              name="username"
              type="text"
              value={userData.username}
              placeholder="Username" // Updated placeholder for clarity
              onChange={handleChange}
            />

            <InputField
              name="email"
              type="email"
              value={userData.email}
              placeholder="Email" // Updated placeholder for clarity
              onChange={handleChange}
            />

            <div className="mt-1 relative rounded-md w-full">
              <InputField
                name="password"
                type={passwordShown ? "text" : "password"}
                value={userData.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-2 right-0 px-3 h-12 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {passwordShown ? (
                  <FiEyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <FiEye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            <Button
              text="Log In"
              bgColor="red"
              textColor="white"
              btnWidth={300}
              btnHeight={60}
              type="submit" // Ensure it's a submit button
            />
            {error && <p className="my-2 text-sm text-red-500">{error}</p>}
            {isLoading && (
              <div className="flex justify-center my-4">
                <MutatingDots
                  visible={true}
                  height="100"
                  width="100"
                  color="#702963"
                  secondaryColor="#e53935"
                  radius="10"
                  ariaLabel="mutating-dots-loading"
                />
              </div>
            )}
          </form>
          <hr />
          <p className="text-slate-400 p-2 w-20 my-3 mx-auto">or with</p>
          <div className="flex justify-around">
            <div className="p-2 border border-slate-500 bg-slate-200 rounded-md w-20 h-14 flex justify-center items-center cursor-pointer">
              <img src={GoogleLogo} alt="Google logo" className="w-8" />
            </div>
          </div>
          <Link to="/SignUp">
            <p className="text-secondary font-bold text-md my-10 mx-auto">
              Sign up
            </p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signin;
