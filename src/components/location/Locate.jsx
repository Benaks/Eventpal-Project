import { useState, useEffect } from "react";
import Categories from "../Carousel/Carousel";
import Popular from "../Carousel/Carousel";
import Today from "../Carousel/Carousel";
import Online from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import SignedNav from "../navbar/SignedNav";
import Footer from "../footers/Footer";
import CoverImg from "../../assets/bannerimg.jpg";
import { FiSearch } from "react-icons/fi";
import CarouselSection from "../Carousel/CarouselSection";
import Carousel from "../Carousel/Carousel";
import CarouselHeads from "../Carousel/CarouselHead";
import CarouselFooter from "../Carousel/Carousel";
import Personalize from "../modals/Personalize";
import { fetchData } from "../api/data";

const Locate = () => {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [inputLocation, setInputLocation] = useState("");


  let locationResult;
  const loadEventsData = async () => {
    const { data, error } = await fetchData(inputLocation);
    if (error) {
      setError(error);
      setEventData(null);
    } else {
      setError(null);
      setEventData(data);
    }
    locationResult = eventData.filter(
      eventData.event_location.includes(inputLocation.toLowerCase())
    );
  };


  const handleOnChange = (e) => {
    setInputLocation(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      loadEventsData();
    }
  }


  return (
    <div>
      <SignedNav />
      {/* banner */}
      <div className="bg-red-200 h-[50vh] my-5 font-poppins mx-10 rounded-xl">
        <img src={CoverImg} alt="" className="h-[100%] w-[100%] rounded-xl" />
      </div>

      {/*  search ctn */}
      <div className="  bg-white p-1 my-10 mx-10 shadow-2xl rounded-lg h-auto md:w-[50%]  border-[1px] border-black">
        <i className="text-gray-800 font-bold text-2xl absolute m-2">
          <FiSearch />
        </i>
        <input
          type="text"
          value={inputLocation}
          placeholder="Choose location"
          onChange={handleOnChange}
          onKeyDown={handleKeyPress}
          className="border-none outline-none mx-10 placeholder:text-sm placeholder:text-gray-600 w-[75%] lg:w-[85%] h-10"
        />
      </div>

      {/* carousel for location search */}

      <CarouselSection head="Minna" subHead="Bset events in Minna">
        <Categories error={error} eventData={locationResult} />
      </CarouselSection>

      {/* carousel for today events */}
      <div className="w-[95%] mx-auto">
        <CarouselHeads
          head="Happening Today"
          subHead="You may be interested to know what's up today"
        />
        <div className="w-full overflow-x-auto">
          <div className="flex justify-around items-center w-[500%] md:w-[200%] my-10">
            <Today />
          </div>
        </div>
      </div>

      {/* carousel for popular events */}
      <CarouselSection
        head="Popular events"
        subHead="Most engaged events you might be interested to attend"
      >
        <div className="w-full overflow-x-auto">
          <div className="flex justify-around items-center w-[500%] md:w-[200%] my-10">
            <Popular error={error} eventData={eventData} />
          </div>
        </div>
      </CarouselSection>

      {/* carousel for online events */}
      <div className="w-[95%] mx-auto">
        <CarouselHeads
          head="Online events"
          subHead="You might also love to know what we have online today"
        />
        <div className="w-full overflow-x-auto">
          <div className="flex justify-around items-center w-[500%] md:w-[200%] mb-10">
            <Online />
          </div>
        </div>
      </div>

      {/* carousel for personalize events */}
      <div className="w-[95%] mx-auto">
        <CarouselHeads
          head="Personalize events"
          subHead="You might like to search events based on your personal interests"
        />
        <Personalize />
      </div>
      <Footer />
    </div>
  );
};

export default Locate;
