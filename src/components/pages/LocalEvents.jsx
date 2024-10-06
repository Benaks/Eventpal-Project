import { useState, useEffect, useContext } from "react";
import Hero from "../HeroSection/Hero";
import MenuBar from "../utils/MenuBar";
import Footer from "../footers/Footer";
import Categories from "../Carousel/Carousel";
import Popular from "../Carousel/Carousel";
import Today from "../Carousel/Carousel";
import Online from "../Carousel/Carousel";
import CarouselHead from "../Carousel/CarouselHead";
import { fetchData } from "../api/data";
import CarouselSection from "../Carousel/CarouselSection";
import Personalize from "../modals/Personalize";
import { MutatingDots } from "react-loader-spinner";
import { AuthContext } from "../auth/AuthContext";

function App() {
  const { isSearching, isLoading } = useContext(AuthContext);
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [inputLocation, setInputLocation] = useState("");

  // Fetch event data from the API
  const loadEventsData = async () => {
    const { data, error } = await fetchData();
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

  const renderLoading = () => (
    <div className="flex justify-center ml-[45vw]">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#702963"
        secondaryColor="#e53935"
        radius="10"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );

  const renderSearchResults = () => (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 p-6 md:p-20">
      {eventData?._embedded?.events.map((result) => (
        <div
          key={result.id}
          className="bg-purple-200 cursor-pointer shadow-md p-4 rounded-md m-4 flex flex-col-reverse hover:scale-105 duration-300 hover:bg-purple-200"
        >
          <h2 className="h-1/2 text-[1.2em] font-bold py-4">{result.name}</h2>
          <img
            src={result.images[0]?.url}
            alt={result.name}
            className="h-2/3 rounded-t-md"
          />
        </div>
      ))}
    </div>
  );

  const renderCarouselSection = (head, subHead, CarouselComponent) => (
    <CarouselSection head={head} subHead={subHead}>
      <CarouselComponent error={error} eventData={eventData} />
    </CarouselSection>
  );

  return (
    <div>
      <Hero
        inputLocation={inputLocation}
        setInputLocation={setInputLocation}
        loadEventsData={loadEventsData}
      />
      <MenuBar />

      {isSearching ? (
        isLoading ? (
          renderLoading()
        ) : (
          renderSearchResults()
        )
      ) : (
        <div>
          <div id="categories">
            {renderCarouselSection(
              "Categories",
              "Select an event to attend today",
              Categories
            )}
          </div>
          <div id="popular-events">
            {renderCarouselSection(
              "Popular events",
              "Most engaged events you might be interested to attend",
              Popular
            )}
          </div>
          <div id="todays-events" className="w-[95%] mx-auto">
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
          <div id="online-events" className="w-[95%] mx-auto">
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
        </div>
      )}
      <div id="personalized-events" className="w-[95%] mx-auto">
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
