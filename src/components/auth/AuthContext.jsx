import { useState, useEffect, createContext } from "react"
import { fetchUserId } from "../query/user-id"
import { fetchUserData } from "../query/user-data"

const AuthContext = createContext()

const AuthProvider = ({children})=> {
  const [userId, setUserId] = useState(null);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navLoading, setNavLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //fetch userId when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch User ID
        const { UserId, error: idError } = await fetchUserId();
        if (UserId) {
          console.log("User id is: ", UserId);
          setUserId(UserId);
        } else {
          throw new Error(idError || "Failed to fetch user ID");
        }

        // Fetch User Data
        const { data, error: dataError } = await fetchUserData();
        if (data) {
          console.log("User Data is: ", data);

          // Set Organizer and Logged In status
          setIsOrganizer(data.is_superuser || false);
          setIsLoggedIn(data.is_active || false);

          console.log(
            data.is_superuser
              ? "User is an Organizer"
              : "User is not an Organizer"
          );
          console.log(
            data.is_active ? "User is logged in" : "User is not logged in"
          );
        } else {
          throw new Error(dataError || "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      } finally {
        // Stop loading spinner or any other loading indicator
        setNavLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array so that this will run once when the component mounts.

  return (
    <AuthContext.Provider
      value={{
        isOrganizer,
        setIsOrganizer,
        isLoggedIn,
        setIsLoggedIn,
        navLoading,
        userId,
        isSearching,
        isLoading,
        setIsLoading,
        setIsSearching
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export  {AuthContext, AuthProvider}