import { useState, useEffect, createContext } from "react"
import { fetchUserId } from "../query/user-id"
import { fetchUserData } from "../query/user-data"
import { fetchData } from "../api/data"

const AuthContext = createContext()

const AuthProvider = ({children})=> {
    const [userId, setUserId] = useState(null)
    const [isOrganizer, setIsOrganizer] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [navLoading, setNavLoading] = useState(true)

    //fetch userId when the component mounts
    const getUserId = async ()=> {
      const {id, error} = await fetchUserId()
      if (id) {
        console.log('User id is: ', id);
        setUserId(id)
      }
    }

        //fetch user data by id
        const getUserData = async ()=> {
          const {data, error} = await fetchUserData()
          if(data){
            console.log('User Data is: ', data);
    
            const superUser  = data.is_superuser === true; 
            const userActive = data.is_active === true;

                    if (superUser) {
                      setIsOrganizer(true)
                      console.log('User is an Organizer'); // Log the new id directly
                    } else {
                        setIsOrganizer(false)
                        console.log('User is not an Organizer');
                    }
            
               if (userActive) {
                setIsLoggedIn (true);
                 console.log("User is an Organizer"); // Log the new id directly
               } else {
                 setIsLoggedIn(false);
                 console.log("User is not an Organizer");
               }
          }
        }
  
  useEffect(() => {
    const fetchData = async () => {
      await getUserId();
      await  getUserData();
      setNavLoading(false); 
    }
    fetchData()
    }, [])
    return(
        <AuthContext.Provider value={{isOrganizer, setIsOrganizer, isLoggedIn, setIsLoggedIn, navLoading, userId}}>
            {children}
             </AuthContext.Provider>
    )
}

export  {AuthContext, AuthProvider}