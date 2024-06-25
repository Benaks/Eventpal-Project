export const fetchData = async () => {
  try {
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/events`;
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return { data, error: null };
  } catch (err) {
    console.log(`This Error was gotten from fetching the data ${err}`);
    return { data: null, error: err };
  }
};
