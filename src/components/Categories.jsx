import { useState, useEffect } from "react";
import Button from "./Button";
import CarouselHead from "./CarouselHead";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Categories = () => {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;
// fhh
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "AIVGQYcF0AuWAIlXChYiRGcEaFuEwR9l";
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?size=45&apikey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setEventData(data);
      } catch (err) {
        setError(err);
        console.error("Error:", err);
      }
    };

    fetchData();
  }, []);

  // pagination function

  // Check if eventData is null before accessing its properties
  const currentEvents =
    // eslint-disable-next-line no-prototype-builtins
    eventData?.hasOwnProperty("_embedded") && eventData._embedded.events
      ? eventData._embedded.events.slice(
          (currentPage - 1) * eventsPerPage,
          currentPage * eventsPerPage
        )
      : [];

  // const handlePrevPage = () => {
  //   console.log("Previous page clicked");
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  const handleNextPage = () => {
    console.log("Next page clicked");
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil((eventData?._embedded?.events?.length || 0) / eventsPerPage)
      )
    );
  };

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
    <div className=" w-[80%] m-auto ">
      <CarouselHead
        head="categories"
        subHead="Select an event to attend today"
      />
      {/* carousel ctn */}
      <div className=" flex flex-col justify-around items-center lg:flex-row md:flex-wrap w-[100%]">
        {error ? (
          <p>Error: {error.message}</p>
        ) : eventData ? (
          currentEvents.map((result) => (
            // carousel
            <div
              key={result.id}
              className=" my-4 rounded-tl-2xl rounded-tr-2xl bg-purple-100 shadow-lg cursor-pointer w-80 hover:scale-105 duration-300 hover:bg-purple-200"
            >
              {/* image */}
              <div className="w-full  h-[12em]">
                <img
                  src={result.images[0].url}
                  alt={result.name}
                  className="h-full w-full rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              <div className="p-4  ">
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
                      )}{" "}
                      {/* date convertion */}
                    </p>
                    <p className="text-sm text-purple-900 text-[0.7em] font-[700]">
                      {new Intl.DateTimeFormat("en-US", timeOptions).format(
                        new Date().setHours(
                          ...result.dates.start.localTime.split(":")
                        )
                      )}{" "}
                      {/* time convertion */}
                    </p>
                  </div>

                  {/* buy button */}
                  <div className=" py-1 ">
                    {result.accessibility ? (
                      <Button text="Get tickets!" />
                    ) : (
                      <Button text="get tickets!" />
                    )}
                  </div>

                  {/* tickets */}
                  <div className="text-xs text-gray-400 md:text-sm ml ">
                    {result.accessibility ? (
                      <p>
                        {result.accessibility.ticketLimit} tickets avialable
                      </p>
                    ) : (
                      <p>No tickets restrictions</p>
                    )}
                  </div>

                  {/* download and price range */}
                  <div className="ml-44">
                    <i className="absolute  bg-purple-200 p-2 rounded-full shadow-lg">
                      <FaArrowRightToBracket className="text-2xl text-red-600 font-extrabold rotate-90 cursor-pointer " />
                    </i>
                    {result.priceRanges ? (
                      <p className="absolute  mt-11 font-[500] text-slate-500">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: result.priceRanges[0].currency,
                        }).format(result.priceRanges[0].min)}
                      </p>
                    ) : (
                      <p className="absolute   font-bold text-purple-300 capitalize">
                        free
                      </p>
                    )}
                  </div>

                  {/* share buttons */}
                  <div className="py-4">
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
          <p className="text-[0.8em] font-[600] text-slate-800">
            Loading events for you...
          </p>
        )}
      </div>

      {/* pagination buttons */}
      <div>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage ===
            Math.ceil(
              (eventData?._embedded?.events?.length || 0) / eventsPerPage
            )
          }
          className="cursor-pointer text-red-600 font-semibold"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Categories;

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
