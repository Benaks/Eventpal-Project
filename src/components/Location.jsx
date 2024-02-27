import { useState } from "react";

const Location = () => {
  const [city, setCity] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const fetchLocationData = async () => {
    try {
      const apiKey = "AIVGQYcF0AuWAIlXChYiRGcEaFuEwR9l";
      const res = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const data = await res.json();
      console.log( data );
      

      if (data._embedded && Array.isArray(data._embedded.events)) {
        const eventsInCity = data._embedded.events.filter((event) => {
          return (
            event._embedded &&
            Array.isArray(event._embedded.venues) &&
            event._embedded.venues.some(
              (venue) => venue.city && venue.city.name === city
            )
          );
        });

        setLocationData(eventsInCity);
        console.log(eventsInCity);
      } else {
        console.log("No events found in the response data");
      }
    } catch (err) {
      setError(err);
      console.log("Error: ", err);
    }
  };

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
        ) : locationData ? (
          locationData._embedded.events.map((result) => (
            <div key={result.id}>
              <h2>{result.name}</h2>
              <img
                src={result.images[0].url}
                alt={result.name}
                className="h-20 w-40"
              />
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default Location;
