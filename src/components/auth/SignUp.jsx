import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignUpImg from "../../assets/signup-hero.svg";
import Button from "../utils/Button";
import GoogleLogo from "../../assets/icons8-google.svg";
import Footer from "../footers/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false); // Toggle password visibility
  const [errors, setErrors] = useState({}); // Manage form validation and API errors
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setPasswordShown(!passwordShown); // Toggle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value })); // Update user input
  };

  // Validate form fields and check for errors
  const validateForm = () => {
    const { username, email, password1, password2 } = userData;
    const newErrors = {};
    if (!username) newErrors.username = "Username is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password1) newErrors.password1 = "Password is required.";
    if (password1 !== password2)
      newErrors.password2 = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(); // Validate form inputs

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set form errors
      return;
    }

    // API endpoint for registration
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/register/`;

    setLoading(true); // Set loading state to true

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const contentType = res.headers.get("content-type");

      if (res.ok) {
        setUserData({ username: "", email: "", password1: "", password2: "" }); // Reset form after success
        setErrors({}); // Clear errors
        navigate("/SignIn"); // Navigate to SignIn page
      } else {
        // Handle errors returned by the API
        const errorData = await res.json();
        const newErrors = {};
        Object.keys(errorData).forEach((key) => {
          newErrors[key] = Array.isArray(errorData[key])
            ? errorData[key].join(", ")
            : errorData[key];
        });
        setErrors(newErrors); // Set API errors
      }
    } catch (error) {
      setErrors({ apiError: "Network error. Please try again." }); // Handle network errors
    } finally {
      setLoading(false); // Set loading state back to false after the request
    }
  };

  return (
    <div className="font-poppins w-full">
      {/* Navigate back */}
      <Link to="/localevents">
        <div className="p-4">
          <AiOutlineArrowLeft className="cursor-pointer font-bold text-black text-2xl" />
        </div>
      </Link>

      <main className="flex justify-center lg:justify-around items-center bg-signup-image lg:bg-none bg-center bg-contain bg-no-repeat w-full lg:w-[90%] mx-auto">
        {/* Image for large screens */}
        <div className="hidden lg:w-[60%] lg:flex justify-center items-center">
          <img src={SignUpImg} alt="Sign-up-hero-image" className="w-[85%]" />
        </div>

        <div className="w-[90%] md:w-1/2 lg:w-[30%] relative z-10">
          <h1 className="text-1xl font-bold cursor-pointer sh pb-3">
            <Link to="/localevents">
              <span className="text-secondary">e</span>ventrybe
            </Link>
          </h1>

          {/* Form Title */}
          <div className="my-3">
            <h1 className="capitalize text-black font-bold text-2xl my-4">
              sign up
            </h1>
            <p className="text-slate-400 text-sm">
              Create your account in seconds
            </p>
          </div>

          {/* Sign-Up Form */}
          <form
            className="flex flex-col justify-around items-center my-10"
            onSubmit={handleSubmit}
          >
            <input
              id="username"
              name="username"
              type="text"
              value={userData.username}
              autoComplete="username"
              onChange={handleChange}
              placeholder="User name"
              className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-700 text-[0.9em] border-black shadow-md"
              required
            />

            <input
              id="email"
              name="email"
              type="email"
              value={userData.email}
              autoComplete="email"
              onChange={handleChange}
              placeholder="Email address"
              className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-700 text-[0.9em] border-black shadow-md"
              required
            />

            {/* Password Input */}
            <div className="mt-1 relative rounded-md w-full">
              <input
                type={passwordShown ? "text" : "password"}
                name="password1"
                value={userData.password1}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-16 mb-10 rounded-2xl p-6 border-[0.2em] border-black shadow-md text-slate-700 text-[0.9em]"
                required
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

            {/* Confirm Password */}
            <input
              type="password"
              name="password2"
              value={userData.password2}
              onChange={handleChange}
              placeholder="Confirm password"
              className={`w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] border-black shadow-md text-slate-700 text-[0.9em] ${
                errors.password2 ? "border-red-500" : ""
              }`}
              required
            />

            {/* Error Messages */}
            {errors.password2 && (
              <p className="my-2 text-sm text-red-500">{errors.password2}</p>
            )}
            {errors.apiError && (
              <p className="my-2 text-sm text-red-500">{errors.apiError}</p>
            )}
            {Object.keys(errors).length > 0 && !errors.apiError && (
              <p className="my-2 text-sm text-red-500">
                Please fill in all the required fields correctly.
              </p>
            )}

            {/* Loading Indicator */}
            {loading && (
              <p className="my-2 text-sm text-blue-500">Loading...</p>
            )}

            {/* Submit Button */}
            <Button
              text="Create Account"
              bgColor="red"
              textColor="white"
              btnWidth={300}
              btnHeight={60}
              disabled={loading} // Disable button while loading
            />
          </form>

          <hr />
          <p className="text-slate-400 p-2 w-20 my-3 mx-auto">or with</p>

          {/* Social Login Options */}
          <div className="flex justify-around">
            <div className="p-2 border border-slate-500 bg-slate-200 rounded-md w-20 h-14 flex justify-center items-center cursor-pointer">
              <img src={GoogleLogo} alt="Google logo" className="w-8" />
            </div>
          </div>

          {/* Link to Login Page */}
          <p className="mt-8 mx-auto text-slate-400 w-[80%] text-sm">
            Already have an account?
            <Link
              to="/SignIn"
              className="text-secondary font-bold text-md ml-1"
            >
              Log in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SignUp;
