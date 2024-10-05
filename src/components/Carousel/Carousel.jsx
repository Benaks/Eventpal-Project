import Button from "../utils/Button";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ThreeDots } from "react-loader-spinner";

const Carousel = ({ error, eventData}) => {

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
    <div className="flex flex-wrap justify-around items-start">
      {/* carousel ctn */}
      {error ? (
        <small>no avialable events</small>
      ) : eventData ? (
        eventData.results.map((result) => (
          // carousel
          <div
            key={result.event_id}
            className="my-10 md:my-10 mx-2 font-roboto bg-purple-100 cursor-pointer rounded-3xl w-[90%] md:w-[30%] lg:w-[20%] h-[45em] md:h-[25em] hover:scale-105 duration-300 hover:bg-purple-200 hover:shadow-lg flex flex-col justify-between items-start"
          >
            {/* image */}
            <div className="relative w-full pb-[65%]">
              <img
                src={result.event_image}
                alt={result.event_name}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl"
                loading="lazy"
              />
            </div>

            {/* text */}

            <div className="h-3/4 p-4 w-full">
              {/* event name */}
              <h1 className="font-bold text-xl  py-1">{result.event_name}</h1>

              {/* location arrow and venue */}
              <div className=" flex py-1 font-[600]">
                <i className="  mr-2 ">
                  <CiLocationArrow1 className="text-xl  mx-1 text-red-700 font-bold" />
                </i>
                <p className="text-bold text-xs">{result.event_location}</p>
              </div>
              <div className="ml-6 py-1">
                {/* time and date */}
                <div className="">
                  <p className="text-[0.7em] text-purple-900 font-[700]">
                    {new Intl.DateTimeFormat("en-GB", dateOptions).format(
                      new Date(result.event_start_date)
                    )}
                  </p>
                </div>

                {/* get tickets and button div */}

                <div className=" flex justify-between">
                  {/* buy button */}

                  <div>
                    <div className=" py-1 ">
                      {result.tickets ? (
                        <Button text="Buy tickets!" />
                      ) : (
                        <Button text="Get tickets!" />
                      )}
                    </div>
                    <div className="text-xs text-gray-400 md:text-sm ml ">
                      {result.tickets ? (
                        <p>{result.ticketLimit} tickets avialable</p>
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
