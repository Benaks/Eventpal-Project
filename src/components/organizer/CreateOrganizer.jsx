import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
import { AuthContext } from "../auth/AuthContext";
const CreateOrganizer = () => {
  const [apiError, setApiError] = useState("");
  const [OrganizerData, setOrganizerData] = useState({
    name: "",
    email: "",
    image: null,
    phoneNumber: "",
    website: "",
    address: "",
    city: "",
    country: "",
    user: null,
    accountDetails: "",
  });
  const [userId, setUserId] = useState(null)

  const navigate = useNavigate();

  const {setIsOrganizer} = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === "file") {
      // If it's a file input, store the file (first one selected)
      setOrganizerData({ ...OrganizerData, [name]: files[0] });
    } else {
      // For other input types, store the value
      setOrganizerData({ ...OrganizerData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add your API call here
    const API_URL = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/create_organizer`;

    // use form data because a file will need to be sent to he database (image)
    const formData = new FormData()
    //append form data
    formData.append('organizer_name', OrganizerData.name)
    formData.append('organizer_description', OrganizerData.desc)
    formData.append('organizer_email', OrganizerData.email)
    formData.append('organizer_display_image', OrganizerData.image)
    formData.append('organizer_phone_number', OrganizerData.phoneNumber)
    formData.append('organizer_website', OrganizerData.website)
    formData.append('organizer_address', OrganizerData.address)
    formData.append('organizer_city', OrganizerData.city)
    formData.append('organizer_country', OrganizerData.country)
    formData.append('organizer_city', OrganizerData.city)
    formData.append('organizer_account_details', OrganizerData.accountDetails)
    formData.append('organizer_user', userId)


    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Successfulyy registered Organizer", result);
        setOrganizerData({
          name: "",
          desc: "",
          email: "",
          image: null,
          phoneNumber: "",
          website: "",
          address: "",
          city: "",
          country: "",
          accountDetails: "",
          user: null,
        });
        setApiError(""); // clears all previous error message
        setIsOrganizer(true)
        navigate("/localevents");
      } else {
        const errorData = await res.json();
        console.log(
          "Error registering Organizer: ",
          res.status,
          res.statusText,
          errorData
        );
        const errorMessage =
          errorData.non_field_errors?.[0] ||
          errorData.password1?.[0] ||
          errorData.username?.[0] ||
          "Error registering organizer.";
        setApiError(errorMessage);
      }
    } catch (error) {
      console.log("Error creating Organizer: ", error);
      setApiError("Error creating Organizer");
    }
    console.log("Organizer data:", OrganizerData);
  };


   //fetch useId when the component mounts
   useEffect(() => {
    const fetchUserId = async () => {
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
  
        const id = data.pk; // Make sure the field name matches your API response
  
        if (id) {
          setUserId(id); // Update state with the user ID
          console.log('User ID is: ', id); // Log the new id directly
        } else {
          console.log('Error getting user ID');
        }
      } catch (error) {
        console.log("Fetch error: ", error.message);
      }
    };
  
    fetchUserId();
  }, []);
  

  const inputData = [
    {
      label: 'Organizer Name',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'John Doe',
      value: OrganizerData.name,
      autoComplete: 'name',
      name: 'name',
      type: 'text'
    },

    {
      label: 'Organizer Description',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'I am a graphics designer ...',
      value: OrganizerData.desc,
      autoComplete: 'desc',
      name: 'desc',
      type: 'text'
    },

    {
      label: 'Organizer Email',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'johndoe@gmail.com ...',
      value: OrganizerData.email,
      autoComplete: 'email',
      name: 'email',
      type: 'email'
    },


    {
      label: 'Organizer Display Image',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'img',
      autoComplete: 'image',
      name: 'image',
      type: 'file'
    },


    {
      label: 'Organizer Phone Number',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: '+1 234 5678 90',
      value: OrganizerData.phoneNumber,
      autoComplete: 'phoneNumber',
      name: 'phoneNumber',
      type: 'number'
    },


    {
      label: 'Organizer Website',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'https://johndoe.com',
      value: OrganizerData.website,
      autoComplete: 'website',
      name: 'website',
      type: 'text'
    },


    {
      label: 'Organizer Address',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'No. 24 Alen Kai street',
      value: OrganizerData.address,
      autoComplete: 'address',
      name: 'address',
      type: 'text'
    },


    {
      label: 'Organizer City',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'Florida',
      value: OrganizerData.city,
      autoComplete: 'city',
      name: 'city',
      type: 'text'
    },


    {
      label: 'Organizer Country',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: 'United States',
      value: OrganizerData.country,
      autoComplete: 'country',
      name: 'country',
      type: 'text'
    },

    {
      label: 'Organizer Account Details',
      requiredStatus: 'required',
      onChange: handleChange,
      placeholder: '0634567289',
      value: OrganizerData.accountDetails,
      autoComplete: 'accountDetails',
      name: 'accountDetails',
      type: 'text'
    },

  ]
  

  return (
    <div className=" w-full flex justify-center items-center">
      <form
        className=" flex flex-col justify-around items-center my-10 w-[80%] md:w-[60%] lg:w-[40%]"
        onSubmit={handleSubmit}
      >
        {inputData.map((data)=> (
          <div className="flex flex-col justify-between items-start w-full my-2 h-auto" key={data.name}>
            <label className="text-sm md:text-md my-1">{data.label}</label>
            <input type={data.type}
                  name={data.name}
                  value={data.value}
                  autoComplete={data.autoComplete}
                  onChange={data.onChange}
                  placeholder={data.placeholder}
                  required={data.requiredStatus}
                  className="w-full h-10 md:h-12 rounded-lg p-4 my-1 text-slate-400 text-[0.9em] shadow-md"
            />
          </div>
        ))}
      
        {apiError && <p className="my-2 text-sm text-red-500">{apiError}</p>}

        <Button
          text="Submit"
          bgColor="red"
          textColor="white"
          btnWidth={150}
          btnHeight={40}
        />
      </form>
    </div>
  );
};

export default CreateOrganizer;
