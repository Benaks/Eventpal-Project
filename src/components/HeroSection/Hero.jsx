import { useState } from "react";
import Heroimg from "../../assets/concert.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Button from "../utils/Button";
import heroData from "./data";

function Hero({handleKeyPress}) {  

  const navigate = useNavigate()
  return (
    <div
      className="bg-cover bg-center flex justify-center items-center w-full"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      {/* hero items */}
      <div className="flex flex-col justify-center items-center text-center p-24 md:p-32 lg:p-40 w-[100%]">
        <h1 className="font-bold text-white font-poppins leading-relaxed word-widest text-3xl md:text-5xl lg:text-6xl my-5 w-80 md:w-[80%] lg:w-[60%]">
          {heroData.Head}
        </h1>
        <p className="text-xs md:text-lg lg:text-xl text-white font-poppins w-80 md:w-[70%] lg:w-[45%]">
          {heroData.Text}
        </p>

        {/* location & search ctn */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-20 w-80 md:w-[90%] lg:w-[56%]"> */}
          {/* location ctn */}
          {/* <div
            className="flex flex-col justify-between items-start w-3/4 md:w-[25%]"
            onClick={()=> navigate('/locatePage')}
          >
            <div className="bg-gray-200 p-3 w-full flex justify-between items-center shadow-2xl rounded-md cursor-pointer">
              <p className="ml-2 md:text-md lg:text-lg text-gray-700 font-[600]">
                Location
              </p>
            </div>
          </div> */}

          {/* search ctn */}
          {/* <div className="bg-gray-200 w-full md:w-1/2 shadow-custom rounded-lg p-1 h-auto my-4 md:my-0">
            <i className="text-gray-700 font-bold text-nd absolute m-3">
              <FiSearch />
            </i>
            <input
              type="text"
              placeholder="Search by artist, date, time, city or events"
              className="bg-gray-200 border-none outline-none mx-10 placeholder:text-gray-600 placeholder:text-xs w-[80%] lg:w-[85%] h-10"
            />
          </div>

            <Button
              text="search"
              bgColor="red"
              textColor="white"
              btnWidth={110}
              btnHeight={50}
              onClick={handleKeyPress}
            />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
