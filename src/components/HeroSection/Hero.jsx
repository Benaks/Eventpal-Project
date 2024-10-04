import { useState, useContext } from "react";
import Heroimg from "../../assets/concert.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Button from "../utils/Button";
import heroData from "./data";
import { AuthContext } from "../auth/AuthContext";

function Hero({handleKeyPress}) {  

  const navigate = useNavigate()
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <div
      className="bg-cover bg-center flex justify-center items-center w-full"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      {/* hero items */}
      <div className="flex flex-col justify-center items-center text-center p-24 md:p-32 lg:p-40 w-[100%]">
        <h1 className="font-bold text-white font-poppins word-widest text-4xl md:text-5xl lg:text-7xl my-5 w-80 md:w-[80%] lg:w-[60%]">
          {heroData.Head}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white font-poppins w-80 md:w-[70%] lg:w-[45%]">
          {heroData.Text}
        </p>
        {!isLoggedIn ? (
          <Link to="/SignUp" className="my-10">
            <Button
              text="Get Started"
              bgColor="red"
              textColor="#fff"
              btnWidth={200}
              btnHeight={50}
              textSize={15}
            />
          </Link>) : null }
      </div>
    </div>
  );
}

export default Hero;
