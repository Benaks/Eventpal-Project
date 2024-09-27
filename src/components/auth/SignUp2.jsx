import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/signup-hero.svg";
import Button from "../utils/Button";
import Footer from "../footers/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SignUp2 = () => {
  const [emptyInputError, setEmptyInputError] = useState(false);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
  });
  const [userId, setUserId] = useState(null)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setEmptyInputError(false)
  };

   //fetch useId when the component mounts
   useEffect(()=> {
    const fetchUserId = async () => {
      const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/user/`;
      const token = localStorage.getItem('authToken')
      console.log(token);
      
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        },
      })

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      console.log('auth user data: ' + data);
      
      const id = data?.userId;

      if (id) {
        setUserId(id)
        console.log('user id is: ' + userId);
      } else{
        console.log('error getting user id');
        
      }
    };

    fetchUserId()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname } = userData;

    // Check if any input is empty
    if (!firstname || !lastname) {
      setEmptyInputError(true);
      return;
    } 

    const API_URL = `${
      import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL
    }/user/${userId}/update/`;
    const requestData = {
      firstname,
      lastname,
    };
    try {
      const res = await fetch(API_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Successfully updated user", result);
        setUserData({
          firstname: "",
          lastname: "",
        });
        navigate("/localEvents");
      } else {
        const errorData = await res.json();
        console.log(
          "Error updating user: ",
          res.status,
          res.statusText,
          errorData
        );
      }
    } catch (error) {
      console.log("Error updating user: ", error);
    }

    console.log("User updated data:", userData);
  };

  return (
    <div className="font-poppins w-full">
      <Link to="/SignUp">
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
            <p className="text-slate-400 text-sm">Complete your registration</p>
          </div>

          <form
            className="flex flex-col justify-around items-center my-10"
            onSubmit={handleSubmit}
          >
            <input
              id="firstname"
              name="firstname"
              type="text"
              value={userData.firstname}
              autoComplete="name"
              onChange={handleChange}
              placeholder="First Name"
              className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
              required
            />

            <input
              id="lastname"
              name="lastname"
              type="text"
              value={userData.lastname}
              autoComplete="name"
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
              required
            />

            <Button
              text="Create Account"
              bgColor="red"
              textColor="white"
              btnWidth={300}
              btnHeight={60}
            />

            {emptyInputError && (
              <p className="my-2 text-sm text-red-500">Fill in all inputs.</p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp2;
