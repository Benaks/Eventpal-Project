import { useState, useEffect } from "react";
import { CiLocationArrow1 } from "react-icons/ci";

const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventData, setEventData] = useState(null);
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
      setEventData(data);
      console.log(data);
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
  }, []);

  return (
    <div>
      
     <div className="relative">
     <div>

<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                               </svg>
</div>
  <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    placeholder=' search events...' className='shadow-lg focus:outline-none text-[1em] bg-slate-100 px-8 py-2 w-90 rounded-full placeholder:text-[0.7em] '
     />
  
  <button onClick={handleSearch}>
  <CiLocationArrow1 className="absolute ml-[-30px] mt-[-14px] mx-1  text-gray-500 font-[900] text-xl" />
  </button>
  
</div>
     </div>
      {isLoading ? (
        <p></p>
      )  (
        <p>Error: {error.message}</p>
      ) : eventData ? (
        eventData._embedded.events.map((result) => (
          <div key={result.id}>
            <h2>{result.name}</h2>
            <h1>cool stuffs bro.......... just using this to test pull</h1>
            <img
              src={result.images[0].url}
              alt={result.name}
              className="h-20 w-40"
            />
          </div>
        ))
      ) : null}
    </div>
  );
};

export default SearchApp;
