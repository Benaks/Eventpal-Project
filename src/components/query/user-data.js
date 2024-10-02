import { fetchUserId } from "./user-id";

export const fetchUserData = async () => {
    const {id} = await fetchUserId()
    console.log('This is log from userdata: ', id);
    
    try {
      const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/user/${id}/`;

      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Token ${token}`,
        },
      });

      if (!res.ok) {
        const errorMessage = `Error: ${res.status} ${res.statusText}`;
        console.log(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log('user data: ', data);

      return{data, error: null}

    } catch (error) {
      console.log("Fetch error: ", error.message);
      return{data: null, error: error}
    }
  };