import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Heroimg from "../assets/concert.svg";
import { MutatingDots } from "react-loader-spinner";
import { FaArrowRightLong } from "react-icons/fa6";

const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventData, setEventData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const apiKey = "AIVGQYcF0AuWAIlXChYiRGcEaFuEwR9l";
      const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}&apikey=${apiKey}`
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div className="font-poppins">
      <Navbar />
      <div
        className="bg-purple-300 h-80 flex items-center justify-center"
        style={{ backgroundImage: `url(${Heroimg})` }}
      >
        <div className="relative">
          <div>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="w-4 h-4 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder=" search events..."
              className=" border-[0.2em] border-gray-500 focus:outline-none text-[1em] px-8 py-2 md:w-[35em]  rounded-[1em] h-12 placeholder:text-[0.7em] "
            />

            <button onClick={handleSearch}>
              <FaArrowRightLong className="absolute ml-[-30px] mt-[-14px] mx-1 hover:text-red-600 animate-pulse text-purple-900 font-[900] text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 sm:grid-cols-2 p-6 md:p-20">
        {isLoading ? (
          <div className="flex  justify-center ml-[45vw]">
            {/* loading animation */}
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
          </div>
        ) : eventData ? (
          eventData._embedded.events.map((result) => (
            <div
              key={result.id}
              className="bg-purple-200 cursor-pointer shadow-md p-4 rounded-md m-4 flex flex-col-reverse  hover:scale-105 duration-300 hover:bg-purple-200"
            >
              <h2 className="h-1/2 text-[1.2em] font-bold py-4">
                {result.name}
              </h2>
              <img
                src={result.images[0].url}
                alt={result.name}
                className="h-2/3 rounded-t-md"
              />
            </div>
          ))
        ) : null}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default SearchApp;
