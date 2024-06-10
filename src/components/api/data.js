

 export const fetchData = async () => {

     try {
      const apiKey = "AIVGQYcF0AuWAIlXChYiRGcEaFuEwR9l";
      const response = await fetch(
        // `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`
        // `/api/events.json?apikey=${apiKey}`
        "https://eventrybe.onrender.com/event"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      return { data, error: null };
    } catch (err) {
      // console.error("Error:", err);
      return { data: null, error: err };
    }

   
  };