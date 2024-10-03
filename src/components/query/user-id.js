export const fetchUserId = async () => {
    try {
      const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL}/user/`;
      const token = localStorage.getItem('authToken')?.trim(); // Ensure token is clean
      console.log("Token: ", token);

      if (!token) {
        console.log("No token found. Redirecting to login.");
        return;
      }

      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`,
        },
      });

      if (!res.ok) {
        const errorMessage = `Error: ${res.status} ${res.statusText}`;
        console.log(errorMessage);
        throw new Error(errorMessage);
      }

      const data = await res.json();
      console.log('Auth user data: ', data);

      //store value of user_id in id
      const id = data.pk;
      
      return {id, error: null}
    } catch (err) {
      console.log("Fetch error: ", err.message);
      return{id: null, error: err}
    }
  };