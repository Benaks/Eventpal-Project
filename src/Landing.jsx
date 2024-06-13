// import { useState, useEffect, createContext } from "react";
// import { Link } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/HeroSection/Hero";
// import MenuBar from "./components/MenuBar";
// import Footer from "./components/footers/Footer";
// import Categories from "./components/Carousel/Carousel";
// import Popular from "./components/Carousel/Carousel";
// import Today from "./components/Carousel/Carousel";
// import Online from "./components/Carousel/Carousel";
// import Pagination from "./components/Pagination";
// import CarouselHead from "./components/Carousel/CarouselHead";
// import { fetchData } from "./components/api/data";
// import CarouselSection from "./components/Carousel/CarouselSection";

// export const AppContext = createContext(null);

// function App() {
//   const [eventData, setEventData] = useState(null);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const eventsPerPage = 6;
//   const [inputLocation, setInputLocation] = useState("");

//   // fetch event data [imported from api/data.js file]
//     const loadEventsData = async () => {
//       const { data, error } = await fetchData();
//       console.log(inputLocation);
//       if (error) {
//         setError(error);
//         setEventData(null);
//       } else {
//         setError(null);
//         setEventData(data);
//       }
//     };

// useEffect(()=> {
//     loadEventsData();
// }, [])

//   // Check if eventData is null before accessing its properties [for pagination]
//   const currentEvents =
//     eventData?.hasOwnProperty("_embedded") && eventData._embedded.events
//       ? eventData._embedded.events.slice(
//           (currentPage - 1) * eventsPerPage,
//           currentPage * eventsPerPage
//         )
//       : [];

//   return (
//     <AppContext.Provider
//       value={{
//         eventData,
//         setEventData,
//         error,
//         setError,
//         currentPage,
//         setCurrentPage,
//         eventsPerPage,
//         inputLocation,
//         setInputLocation,
//         currentEvents,
//         loadEventsData,
//       }}
//     >
//       {/* navigation bar */}
//       <div className="my-6">
//         <Navbar />
//       </div>
//       {/* hero section */}
//       <Hero
//         inputLocation={inputLocation}
//         setInputLocation={setInputLocation}
//         loadEventsData={loadEventsData}
//       />
//       {/* menubar */}
//       <MenuBar />

//       {/* categories ctn */} 
//        <div className="w-[95%] m-auto">
//         <CarouselHead
//           head="categories"
//           subHead="Select an event to attend today"
//         />
//         <div className="flex flex-col justify-around items-center lg:flex-row md:flex-wrap w-[100%]">
//           <Categories />
//         </div>
//         <Pagination />
//       </div>

//       {/* Popular events ctn */}
//       <div className="w-[95%] m-auto">
//         <CarouselHead
//           head="popular"
//           subHead="Most engaged events you migt be interested to attend"
//         />
//         <div className="flex flex-col justify-around items-center lg:flex-row md:flex-wrap w-[100%]">
//           <Popular />
//         </div>
//         <Pagination />
//       </div>

//       {/* Today events ctn */}
//       <div className="w-[80%] m-auto">
//         <CarouselHead
//           head="today's events"
//           subHead="You may be interested to know what's up today"
//         />
//         <div className="w-[100%] overflow-x-auto">
//           <div className="flex justify-around items-center w-[500%] md:w-[200%] my-10">
//             <Today />
//           </div>
//         </div>
//       </div>

//       {/* Online events ctn */}
//       <div className="w-[80%] m-auto">
//         <CarouselHead
//           head="online events"
//           subHead="You might also love to know what we have online today"
//         />
//         <div className=" w-[100%] overflow-x-auto">
//           <div className="flex justify-around items-center w-[500%] md:w-[200%] mb-10">
//             <Online />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </AppContext.Provider>
//   );
// }

// export default App;


import { useState, useEffect, createContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection/Hero";
import MenuBar from "./components/MenuBar";
import Footer from "./components/footers/Footer";
import Categories from "./components/Carousel/Carousel";
import Popular from "./components/Carousel/Carousel";
import Today from "./components/Carousel/Carousel";
import Online from "./components/Carousel/Carousel";
import Pagination from "./components/Pagination";
import CarouselHead from "./components/Carousel/CarouselHead";
import { fetchData } from "./components/api/data";
import CarouselSection from "./components/Carousel/CarouselSection";
import Personalize from "./components/Personalize";

export const AppContext = createContext(null);

function App() {
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

  

  useEffect(()=> {
loadEventsData();
  })


  // Check if eventData is null before accessing its properties [for pagination]
  const currentEvents =
    eventData?.hasOwnProperty("_embedded") && eventData._embedded.events
      ? eventData._embedded.events.slice(
          (currentPage - 1) * eventsPerPage,
          currentPage * eventsPerPage
        )
      : [];

  return (
    <>
      {/* navigation bar */}
      <div className="my-6">
        <Navbar />
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
        <Categories
          error={error}
          eventData={eventData}
          currentEvents={currentEvents}
        />
      </CarouselSection>

      {/* carousel for popular events */}
      <CarouselSection
        head="Popular events"
        subHead="Most engaged events you might be interested to attend"
      >
        <Popular
          error={error}
          eventData={eventData}
          currentEvents={currentEvents}
        />
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
    </>
  );
}

export default App;
