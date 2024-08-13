// import { fetchData } from "./components/api/data"
import { useState, useEffect } from "react";

const TestOrganizer = () => {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  const loadEventsData = async () => {
    try{
         const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/events`;
         const response = await fetch(API_URL)
         const data = await response.json()
         console.log(data);
         setEventData(data);
    }
    catch(err){
        console.log(err);
        setError(`This error was encountered: ${err}`);
    }
    
   
  };

  useEffect(() => {
    loadEventsData();
  }, []);
  return (
    <div>
      {eventData && eventData.length > 0 ? (eventData.map((item) => (
        <div key={item.id}>
          <img src={item.event_image} alt="display image" />
          <p>{item.event_description}</p>
        </div>
      ))) : (<p>NO ORGANIZERS FOUND</p>)}
    </div>
  );
};

export default TestOrganizer;
