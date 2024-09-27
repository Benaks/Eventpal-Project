import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/Standing.png";
import Button from "../utils/Button";
import AppleLogo from "../../assets/icons8-apple-logo.svg";
import FacebookLogo from "../../assets/icons8-facebook.svg";
import GoogleLogo from "../../assets/icons8-google.svg";
import Footer from "../footers/Footer";
import { AppContext } from "../pages/Landing";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Signin = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [emptyInputError, setEmptyInputError] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { userIsActive, setUserIsActive } = useContext(AppContext);
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, username, password } = userData;

    // Check if any input is empty
    if (!username || !password) {
      setEmptyInputError(true);
      return;
    } else {
      setEmptyInputError(false);
    }
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/login/`;

    const requestData = {
      username,
      email: username,
      password,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      if (res.ok) {
        const result = await res.json();
        const token = result.key
        localStorage.setItem('authToken', token) //save auth token to localstorage
        console.log("Successfully logged in", result);
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        // toggle the state of the user activness
        // setUserIsActive(true)
        navigate('/localevents')
      } else {
        const errorData = await res.json();
        console.log(
          "Error logging in: ",
          res.status,
          res.statusText,
          errorData,
        );
      }
    } catch (error) {
      console.log("Error logging in: ", error);
    }
    console.log("Form submitted");
  };
  return (
    <div>
      <div className="font-poppins">
        {/* Back arrow div */}
        <Link to="/">
          <div className=" p-4">
            {/* Back Arrow */}
            <AiOutlineArrowLeft className=" cursor-pointer font-bold text-black text-2xl" />
          </div>
        </Link>
        <main className="flex justify-center lg:justify-around items-center bg-signin-image lg:bg-none bg-center bg-contain bg-no-repeat w-full lg:w-[90%] mx-auto">
          {/* image ctn for large screens */}
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

            <form className="flex flex-col justify-around items-center my-10">
              <input
                id="username"
                name="username"
                type="email"
                value={userData.username}
                onChange={handleChange}
                autoComplete="email"
                placeholder="Email"
                className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
                required
              />

              {/* ctn for password input */}
              <div className="mt-1 relative rounded-md w-full">
                <input
                  type={passwordShown ? "text" : "password"}
                  autoComplete="new-password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
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

              <Button
                text="Log In"
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
              {/* <div className="p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
                <img src={FacebookLogo} alt="Facebook logo" className="w-10" />
              </div>
              <div className="p-4 border border-slate-500 bg-slate-200 w-20 h-14 flex justify-center items-center rounded-md cursor-pointer">
                <img src={AppleLogo} alt="Apple logo" className="w-9" />
              </div> */}
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
    </div>
  );
};

export default Signin;
