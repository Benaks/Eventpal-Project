import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SignUpImg from "../../assets/signup-hero.svg";
import Button from "../Button";
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

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = () => {
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    } else {
      setPasswordMatchError(false);
    }

    // Check if any input is empty
    if (
      emailRef.current.value === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setEmptyInputError(true);
      return;
    } else {
      setEmptyInputError(false);
    }

    // Continue with sign up logic
    const formData = {
      email: emailRef.current.value,
      password: password,
    };

    console.log("User Sign Up data:", formData);
    // Add logic to send formData to backend or perform further actions
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
          <img
            src={SignUpImg}
            alt="Sign-up-hero-image"
            className="w-[85%]"
          />
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
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              ref={emailRef}
              placeholder="Email address"
              className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
              required
            />

            {/* ctn for password input */}
            <div className="mt-1 relative rounded-md w-full">
              <input
                type={passwordShown ? "text" : "password"}
                autoComplete="new-password"
                ref={passwordRef}
                placeholder="Password"
                className="w-full h-16 mb-10 rounded-2xl p-6 border-[0.2em] border-black shadow-md text-slate-400 text-[0.9em]"
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
              ref={confirmPasswordRef}
              placeholder="Confirm password"
              className={`w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] border-black shadow-md text-slate-400 text-[0.9em] ${
                passwordMatchError ? "border-red-500" : ""
              }`}
              required
            />

            {passwordMatchError && (
              <p className="my-2 text-sm text-red-500">
                Passwords do not match.
              </p>
            )}

            <Button
              text="Create Account"
              bgColor="red"
              textColor="white"
              btnWidth={300}
              btnHeight={60}
              onClick={handleSubmit}
            />

            {emptyInputError && (
              <p className="my-2 text-sm text-red-500">Fill in all inputs.</p>
            )}
          </form>

          <hr className="" />
          <p className="text-slate-400 p-2 w-20 my-3 mx-auto">or with</p>

          <div className="flex justify-around">
            <div className="p-2 border border-slate-500 bg-slate-200 rounded-md w-20 h-14 flex justify-center items-center cursor-pointer">
              <img src={GoogleLogo} alt="Google logo" className="w-8" />
            </div>
            <div className="p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
              <img src={FacebookLogo} alt="Facebook logo" className="w-10" />
            </div>
            <div className="p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
              <img src={AppleLogo} alt="Apple logo" className="w-9" />
            </div>
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
