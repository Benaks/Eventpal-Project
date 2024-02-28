/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import Button from "./Button";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { MutatingDots } from 'react-loader-spinner';
// import Pagination from "./Pagination";

const Carousel = ({ error, eventData, currentEvents }) => {
  // options for date conversion
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  //options for time conversion
  const timeOptions = { hour: "numeric", hour12: true };

  return (
    <>
      {/* carousel ctn */}
      {error ? (
        <small>no avialable events</small>
      ) : eventData ? (
        currentEvents.map((result) => (
          // carousel
          <div
            key={result.id}
            className="my-10 md:my-10 mx-5 font-roboto bg-purple-100 cursor-pointer rounded-3xl w-[90%] md:w-[25%] h-[45em] md:h-[35em] hover:scale-105 duration-300 hover:bg-purple-200 hover:shadow-lg flex flex-col justify-around items-start"
          >
            {/* image */}
            <div className="w-full h-1/2 overflow-y-hidden">
              <img
                src={result.images[0].url}
                alt={result.name}
                className="w-full h-full rounded-tl-2xl rounded-tr-2xl"
              />
            </div>

            {/* text */}

            <div className="h-1/2 p-4 w-full">
              {/* event name */}
              <h1 className="font-bold text-2xl  py-1">{result.name}</h1>

              {/* location arrow and venue */}
              <div className=" flex py-1 font-[600]">
                <i className="  mr-2 ">
                  <CiLocationArrow1 className="text-xl  mx-1 text-red-700 font-bold" />
                </i>
                <p className="text-bold text-sm">
                  {result._embedded.venues[0].name}
                  {result._embedded.venues[0].address.line1}
                  {result._embedded.venues[0].city.name}
                </p>
              </div>
              <div className="ml-6 py-1">
                {/* time and date */}
                <div className="">
                  <p className="text-[0.7em] text-purple-900 font-[700]">
                    {new Intl.DateTimeFormat("en-GB", dateOptions).format(
                      new Date(result.dates.start.dateTime)
                    )}
                    {/* date convertion */}
                  </p>
                  <p className="text-sm text-purple-900 text-[0.7em] font-[700]">
                    {new Intl.DateTimeFormat("en-US", timeOptions).format(
                      new Date().setHours(
                        ...result.dates.start.localTime.split(":")
                      )
                    )}
                    {/* time convertion */}
                  </p>
                </div>

                {/* get tickets and button div */}

                <div className=" flex justify-between">
                  {/* buy button */}

                  <div>
                    <div className=" py-1 ">
                      {result.accessibility ? (
                        <Button text="Buy tickets!" />
                      ) : (
                        <Button text="Get tickets!" />
                      )}
                    </div>
                    <div className="text-xs text-gray-400 md:text-sm ml ">
                      {result.accessibility ? (
                        <p>
                          {result.accessibility.ticketLimit} tickets avialable
                        </p>
                      ) : (
                        <p>No tickets restrictions</p>
                      )}
                    </div>
                  </div>

                  {/* download and price range*/}

                  <div className="mr-4 flex ">
                    <div className="">
                      <i className=" bg-red-100 w-6">
                        <div className="bg-slate-200 shadow-lg p-3 rounded-full">
                          <FaArrowRightToBracket className="text-2xl text-red-600 font-extrabold rotate-90 cursor-pointer ml-0.1  " />
                        </div>
                      </i>
                      {result.priceRanges ? (
                        <p className=" font-[400] text-slate-500 mt-1">
                          {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: result.priceRanges[0].currency,
                          }).format(result.priceRanges[0].min)}
                        </p>
                      ) : (
                        <p className="   font-bold text-purple-300 capitalize">
                          free
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* tickets */}

                {/* share buttons */}
                <div className="py-4 mb-2">
                  <p className="text-[0.7em] pb-1 font-bold">Share on:</p>
                  <div className="flex gap-3">
                    <BiLogoFacebook className="bg-purple-300 py-1 rounded-full text-2xl" />
                    <RiTwitterXLine className="bg-purple-300 py-1 rounded-full text-2xl" />
                    <FaInstagram className="bg-purple-300 py-1 rounded-full text-2xl" />
                    <TiSocialGooglePlus className="bg-purple-300 py-1 rounded-full text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
        ) : (
            
            // loading animation
            // <BallTriangle
            // height={100}
            // width={100}
            // radius={5}
            // color="#702963"
            // ariaLabel="ball-triangle-loading"
            // wrapperStyle={{}}
            // wrapperClass=""
            // visible={true}
                       // />
                       <MutatingDots
             visible={true}
             height="100"
             width="100"
             color="#702963"
             secondaryColor="#e53935"
             radius="12.5"
             ariaLabel="mutating-dots-loading"
             wrapperStyle={{}}
             wrapperClass=""
             />
            
      )}
    </>
  );
};

export default Carousel;

/* name 
  venue
  day, date
  time
  ticket btn
  no. of tickets purchaced
  download btn 
  price
  share on (facebk, X, insta, google)
  */
