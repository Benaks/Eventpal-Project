export const fetchEvents = async () => {
    try {
        const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/events`;
        
        const res = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
            const errorMessage = `Error: ${res.status} ${res.statusText}`;
            console.log(errorMessage);
            throw new Error(errorMessage);
        } 

        const allEvents = await res.json()
        console.log('Events: ', allEvents);
        return { allEvents, errror: null }
        
    } catch {
         console.log("Fetch error: ", error.message);
         return { allEvents: null, error: error };
    }
}