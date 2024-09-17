import { useState, useEffect, createContext } from "react";
import SignedNav from "../navbar/SignedNav";
import Hero from "../HeroSection/Hero";
import MenuBar from "../utils/MenuBar";
import Footer from "../footers/Footer";
import Categories from "../Carousel/Carousel";
import Popular from "../Carousel/Carousel";
import Today from "../Carousel/Carousel";
import Online from "../Carousel/Carousel";
// import Pagination from "../utils/Pagination";
import CarouselHead from "../Carousel/CarouselHead";
import { fetchData } from "../api/data";
import CarouselSection from "../Carousel/CarouselSection";
import Personalize from "../modals/Personalize";

export const AppContext = createContext({});

function App() {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  // const [currentPage, setCurrentPage] = useState(1);
  // const eventsPerPage = 6;
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

  // Check if eventData is null before accessing its properties [for pagination]
  // const currentEvents =
  //   eventData?.hasOwnProperty("_embedded") && eventData._embedded.events
  //     ? eventData._embedded.events.slice(
  //         (currentPage - 1) * eventsPerPage,
  //         currentPage * eventsPerPage
  //       )
  //     : [];

  return (
    <div>
      {/* navigation bar */}
      <div>
        <SignedNav />
      </div>
      {/* hero section */}
      <Hero
        inputLocation={inputLocation}
        setInputLocation={setInputLocation}
        loadEventsData={loadEventsData}
      />
      {/* menubar */}
      <MenuBar />

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
        <CarouselHead
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
        <CarouselHead
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
        <CarouselHead
          head="Personalize events"
          subHead="You might like to search events based on your personal interests"
        />
        <Personalize />
      </div>

      <Footer />
    </div>
  );
}

export default App;
