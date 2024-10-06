import React from "react";
import Button from "../utils/Button";
import { LuDownload } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ThreeDots } from "react-loader-spinner";

const Carousel = ({ error, eventData }) => {
  // Date and time formatting options
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="flex flex-wrap justify-around items-center w-full">
      {error ? (
        <small>No available events</small>
      ) : eventData ? (
        eventData.results.map((event) => (
          <div
            key={event.event_id}
            className="my-10 mx-2 font-roboto bg-purple-00 shadow-sm cursor-pointer rounded-3xl w-[90%] md:w-[37%] lg:w-[25%] h-auto md:h-auto hover:scale-105 duration-300 hover:shadow-md flex flex-col"
          >
            {/* Event image */}
            <div className="relative w-full pb-[60%]">
              <img
                src={event.event_image}
                alt={event.event_name}
                className="absolute w-full h-full object-cover rounded-t-2xl"
                loading="lazy"
              />
            </div>

            {/* Event details */}
            <div className="h-3/4 p-4 w-full">
              {/* Event name */}
              <h1 className="font-bold text-xl py-1 break-words">
                {event.event_name}
              </h1>

              {/* Location */}
              <div className="flex py-1 font-semibold">
                <div className="bg-white w-6 h-6 mx-1 rounded-xl">
                  <CiLocationArrow1 className="text-md m-1 text-red-700" />
                </div>
                <p className="text-xs mx-2">{event.event_location}</p>
              </div>

              {/* Event date */}
              <p className="text-xs mt-1">
                {new Intl.DateTimeFormat("en-GB", dateOptions).format(
                  new Date(event.event_start_date)
                )}
              </p>

              {/* Tickets and share */}
              <div className="flex flex-col justify-between items-start w-[90%] mt-2">
                {/* Ticket button */}
                <div className="">
                  <Button
                    text={event.tickets ? "Buy tickets!" : "Get tickets!"}
                    bgColor="red"
                    textColor="white"
                    btnWidth={100}
                    btnHeight={50}
                    textSize={14}
                  />
                  <p className="text-xs text-gray-400 my-2">
                    {event.tickets
                      ? `${event.ticketLimit} tickets available`
                      : "No ticket restrictions"}
                  </p>
                </div>
                {/* Social Share */}
                <div className="my-1">
                  <p className="text-xs font-bold mb-1">Share on:</p>
                  <div className="flex gap-2">
                    <BiLogoFacebook className="bg-gray-300 p-1 rounded-full text-xl" />
                    <RiTwitterXLine className="bg-gray-300 p-1 rounded-full text-xl" />
                    <FaInstagram className="bg-gray-300 p-1 rounded-full text-xl" />
                    <TiSocialGooglePlus className="bg-gray-300 p-1 rounded-full text-xl" />
                  </div>
                </div>
              </div>
              {/* Price and Download */}
              <div className="flex flex-col items-end w-[90%]">
                {/* download btn */}
                <div className="bg-white cursor-pointer p-2 rounded-full shadow-xl">
                  <LuDownload className="text-3xl text-red-600 font-bold" />
                </div>
                <div className="my-2 mx-2">
                  <p className="font-medium text-slate-500">
                    {event.priceRanges ? (
                      new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: event.priceRanges[0].currency,
                      }).format(event.priceRanges[0].min)
                    ) : (
                      <span className="text-black">Free</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <ThreeDots
          visible={true}
          height="45"
          width="45"
          color="#702963"
          secondaryColor="#e53935"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      )}
    </div>
  );
};

export default Carousel;
