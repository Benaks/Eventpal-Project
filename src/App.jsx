import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuBar from "./components/MenuBar";
import Categories from "./components/Carousel";
import Popular from "./components/Carousel";
import Today from "./components/Carousel";
import Online from './components/Carousel'
import Pagination from "./components/Pagination";
import CarouselHead from "./components/CarouselHead";
import Footer from "./components/Footer";

function App() {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "AIVGQYcF0AuWAIlXChYiRGcEaFuEwR9l";
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?size=60&apikey=${apiKey}`
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

  // Check if eventData is null before accessing its properties
  const currentEvents =
    // eslint-disable-next-line no-prototype-builtins
    eventData?.hasOwnProperty("_embedded") && eventData._embedded.events
      ? eventData._embedded.events.slice(
          (currentPage - 1) * eventsPerPage,
          currentPage * eventsPerPage
        )
      : [];
  return (
    <>
      <Navbar />
      <Hero />
      <MenuBar />

      <div className="w-[95%] m-auto bg-purple-900">
        <CarouselHead
          head="categories"
          subHead="Select an event to attend today"
        />
        <div className="flex flex-col justify-around items-center lg:flex-row md:flex-wrap w-[100%]">
          <Categories
            error={error}
            eventData={eventData}
            currentEvents={currentEvents}
          />
        </div>
        <Pagination
          eventData={eventData}
          setCurrentPage={setCurrentPage}
          eventsPerPage={eventsPerPage}
          currentPage={currentPage}
        />
      </div>

      <div className="w-[95%] m-auto">
        <CarouselHead
          head="popular"
          subHead="Most engaged events you migt be interested to attend"
        />
        <div className="flex flex-col justify-around items-center lg:flex-row md:flex-wrap w-[100%] bg-green-600">
          <Popular
            error={error}
            eventData={eventData}
            currentEvents={currentEvents}
          />
        </div>
        <Pagination
          eventData={eventData}
          setCurrentPage={setCurrentPage}
          eventsPerPage={eventsPerPage}
          currentPage={currentPage}
        />
      </div>

      <div className="w-[80%] m-auto">
        <CarouselHead
          head="today's events"
          subHead="You may be interested to know what's up today"
        />
        <div className="w-[100%] overflow-x-auto">
          <div className="flex justify-around items-center w-[400%] my-10">
            <Today
              error={error}
              eventData={eventData}
              currentEvents={currentEvents}
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] m-auto">
        <CarouselHead 
          head="online events"
          subHead="You might also love to know what we have online today"
        />
        <div className=" w-[100%] overflow-x-auto">
          <div className="flex justify-around items-center w-[400%] mb-10">
            <Online
              error={error}
              eventData={eventData}
              currentEvents={currentEvents}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
