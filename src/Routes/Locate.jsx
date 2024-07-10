import {useState, useEffect} from 'react'
import Categories from "../components/Carousel/Carousel";
import Popular from "../components/Carousel/Carousel";
import Today from "../components/Carousel/Carousel";
import Online from "../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import SignedNav from '../components/accounts/Signed Users Navbar/SignedNav'
import Footer from '../components/footers/Footer'
import CoverImg from './../assets/bannerimg.jpg'
import { FiSearch } from "react-icons/fi";
import CarouselSection from '../components/Carousel/CarouselSection';
import Carousel from '../components/Carousel/Carousel'
import CarouselHeads from '../components/Carousel/CarouselHead';
import CarouselFooter from '../components/Carousel/Carousel'
import Personalize from '../components/Personalize';




const Locate = () => {

    const [eventData, setEventData] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;
    const [inputLocation, setInputLocation] = useState("");

    // fetch event data [imported from api/data.js file]

    const loadEventsData = async () => {
      const { data, error } = await fetchData();
      console.log(inputLocation);
      if (error) {
        setError(error);
        setEventData(null);
      } else {
        setError(null);
        setEventData(data);
      }
    };

    useEffect(() => {
      loadEventsData();
    }, []);


  return (
    <div>
      <SignedNav />
      {/* banner */}
      <div className="bg-red-200 h-[50vh] my-5 font-poppins mx-10 rounded-xl">
        <img
          src={CoverImg}
          alt=""
          className="h-[100%] w-[100%] rounded-xl"
        />
      </div>

      {/*  search ctn */}
      <div className="  bg-white p-1 my-10 mx-10 shadow-2xl rounded-lg h-auto md:w-[50%]  border-[1px] border-black">
        <Link to="/SearchApp">
          <i className="text-gray-700 font-bold text-2xl absolute m-2">
            <FiSearch />
          </i>
          <input
            type="text"
            placeholder="Search events ..."
            className="border-none outline-none mx-10 placeholder:text-xs w-[75%] lg:w-[85%] h-10"
          />
        </Link>
      </div>

      {/* carousel for categories */}
      
      <CarouselSection
        head="Categories"
        subHead="Select an event to attend today"
      >
        <Categories error={error} eventData={eventData} />
      </CarouselSection>

      {/* carousel for popular events */}
      <CarouselSection
        head="Popular events"
        subHead="Most engaged events you might be interested to attend"
      >
        <Popular error={error} eventData={eventData} />
      </CarouselSection>

      {/* carousel for today events */}
      <div className="w-[95%] mx-auto">
        <CarouselHeads
          head="Today's events"
          subHead="You may be interested to know what's up today"
        />
        <div className="w-full overflow-x-auto">
          <div className="flex justify-around items-center w-[500%] md:w-[200%] my-10">
            <Today />
          </div>
        </div>
      </div>

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
}

export default Locate
