import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SignUpImg from "../../assets/signup-hero.svg";
import Button from "../utils/Button";
import AppleLogo from "../../assets/icons8-apple-logo.svg";
import FacebookLogo from "../../assets/icons8-facebook.svg";
import GoogleLogo from "../../assets/icons8-google.svg";
import Footer from "../footers/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [emptyInputError, setEmptyInputError] = useState(false);
  const [apiError, setApiError] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password1, password2 } = userData;
  
    // Check if passwords match
    if (password1 !== password2) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }
  
    // Check if any input is empty
    if (!username || !email || !password1 || !password2) {
      setEmptyInputError(true);
      return;
    } else {
      setEmptyInputError(false);
    }
  
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/register/`;
    const requestData = {
      username,
      email,
      password1,
      password2,
    };
  
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      const contentType = res.headers.get("content-type");
      
      if (res.ok) {
        const result = contentType && contentType.includes("application/json") ? await res.json() : {};
        console.log("Successfully created user");
        setUserData({
          username: "",
          email: "",
          password1: "",
          password2: "",
        });
        setApiError(""); // Clear any previous error message
        navigate("/SignIn");
      } else {
        let errorMessage = "Error registering user.";
        if (contentType && contentType.includes("application/json")) {
          const errorData = await res.json();
          errorMessage =
            errorData.non_field_errors?.[0] ||
            errorData.password1?.[0] ||
            errorData.username?.[0] ||
            errorData.email?.[0] ||
            errorMessage;
        }
        console.log("Error registering user: ", res.status, res.statusText);
        setApiError(errorMessage);
      }
    } catch (error) {
      console.log("Error creating user: ", error);
      setApiError("Error creating user."); // Set a generic error message
    }
  
    console.log("User Sign Up data:", userData);
  };
  
  return (
    <div className="font-poppins w-full">
      <Link to="/">
        <div className="p-4">
          <AiOutlineArrowLeft className="cursor-pointer font-bold text-black text-2xl" />
        </div>
      </Link>

      <main className="flex justify-center lg:justify-around items-center bg-signup-image lg:bg-none bg-center bg-contain bg-no-repeat w-full lg:w-[90%] mx-auto">
        {/* image ctn for large screens */}
        <div className="hidden lg:w-[60%] lg:flex justify-center items-center">
          <img src={SignUpImg} alt="Sign-up-hero-image" className="w-[85%]" />
        </div>

        <div className="w-[90%] md:w-1/2 lg:w-[30%] relative z-10">
          <h1 className="text-1xl font-bold cursor-pointer sh pb-3">
            <Link to="/">
              <span className="text-secondary">e</span>ventrybe
            </Link>
          </h1>
          <div className="my-3">
            <h1 className="capitalize text-black font-bold text-2xl my-4">
              sign up
            </h1>
            <p className="text-slate-400 text-sm">
              Create your account in seconds
            </p>
          </div>

          <form
            className="flex flex-col justify-around items-center my-10"
            onSubmit={handleSubmit}
          >
             <input
              id="username"
              name="username"
              type="text"
              value={userData.username}
              autoComplete="useername"
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

            {/* ctn for password input */}
            <div className="mt-1 relative rounded-md w-full">
              <input
                type={passwordShown ? "text" : "password"}
                autoComplete="new-password"
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

            <input
              type="password"
              name="password2"
              value={userData.password2}
              onChange={handleChange}
              placeholder="Confirm password"
              className={`w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] border-black shadow-md text-slate-700 text-[0.9em] ${
                passwordMatchError ? "border-red-500" : ""
              }`}
              required
            />

            {passwordMatchError && (
              <p className="my-2 text-sm text-red-500">
                Passwords do not match.
              </p>
            )}

            {apiError && (
              <p className="my-2 text-sm text-red-500">{apiError}</p>
            )}

            {emptyInputError && (
              <p className="my-2 text-sm text-red-500">Fill in all inputs.</p>
            )}

            <Button
              text="Create Account"
              bgColor="red"
              textColor="white"
              btnWidth={300}
              btnHeight={60}
            />
          </form>

          <hr className="" />
          <p className="text-slate-400 p-2 w-20 my-3 mx-auto">or with</p>

          <div className="flex justify-around">
            <div className="p-2 border border-slate-500 bg-slate-200 rounded-md w-20 h-14 flex justify-center items-center cursor-pointer">
              <img src={GoogleLogo} alt="Google logo" className="w-8" />
            </div>
            {/* <div className="p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
              <img src={FacebookLogo} alt="Facebook logo" className="w-10" />
            </div>
            <div className="p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
              <img src={AppleLogo} alt="Apple logo" className="w-9" />
            </div> */}
          </div>

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
