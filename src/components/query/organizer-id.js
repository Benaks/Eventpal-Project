import { fetchUserId } from "./user-id";

export const fetchOrganizerId = async () => {
  const {UserId} = await fetchUserId()
  try {
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/organizers`;
    const token = localStorage.getItem("authToken")?.trim(); // Ensure token is clean
    console.log("Token: ", token);

    if (!token) {
      console.log("No token found");
      return;
    }

    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });

    if (!res.ok) {
      const errorMessage = `Error: ${res.status} ${res.statusText}`;
      console.log(errorMessage);
      throw new Error(errorMessage);
    }

    const data = await res.json();
    console.log("Auth Organizer data: ", data);

    // retrive the value of organizer_id
    const retrivedId = data.results.find((item) => item.organizer_user === UserId)
    let orgId
if (retrivedId) {
   orgId = retrivedId.organizer_id;
} else {
  console.log("No matching organizer user found");
}
    
    return { orgId, error: null };
  } catch (err) {
    console.log("Fetch error: ", err.message);
    return { orgId: null, error: err };
  }
};
