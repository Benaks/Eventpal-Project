import { useState } from "react";
import {fetchData} from '../api/data';

const Location = () => {
  const [city, setCity] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const fetchLocationData = () => {if (
    data._embedded &&
    data._embedded.events &&
    Array.isArray(data._embedded.events)
  ) {
    const eventsInCity = data._embedded.events.filter((event) => {
      return (
        event._embedded &&
        Array.isArray(event._embedded.venues) &&
        event._embedded.venues.some((venue) => {
          console.log("Entered City:", city.toLowerCase());
          console.log(
            "Venue City:",
            venue.city && venue.city.name.toLowerCase()
          );
          console.log("Venue Data:", venue);
          return (
            venue.city && venue.city.name.toLowerCase() === city.toLowerCase()
          );
        })
      );
    });

    setLocationData(eventsInCity);
    console.log(eventsInCity);
  } else {
    console.log("No events found in the response data");
  }

  setError(err);
  console.log("Error: ", err);
}
  const handleLocation = () => fetchLocationData();

  return (
    <div>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="enter city"
        />
        <button onClick={handleLocation}>locate</button>
      </div>
      <div>
        {error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div>
            {locationData && locationData.length > 0 ? (
              locationData.map((result) => (
                <div key={result.id}>
                  <h2>{result.name}</h2>
                  <img
                    src={result.images[0].url}
                    alt={result.name}
                    className="h-20 w-40"
                  />
                </div>
              ))
            ) : (
              <p>No events found in the entered city.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
