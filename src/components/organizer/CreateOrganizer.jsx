import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import Button from "../utils/Button"
const CreateOrganizer = () => {
    const [apiError, setApiError] = useState("")
    const [OrganizerData, setOrganizerData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        website: "",
        city: "",
        country: "",
        user: null,
        accountDetails: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setOrganizerData({...OrganizerData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {name, email, phoneNumber, website, city, country, accountDetails, } = OrganizerData
        // Add your API call here
    const API_URL = `${
      import.meta.env.VITE_APP_EVENTRYBE_AUTH_URL
    }/create_organizer`;
    const requestData = {
      name,
      email,
      phoneNumber,
      website,
      city,
      country,
      accountDetails,

    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (res.ok) {
        const result = await res.json();
        console.log('Successfulyy registered Organizer', result);
        setOrganizerData({
        name: "",
        email: "",
        phoneNumber: "",
        website: "",
        city: "",
        country: "",
        accountDetails: "",

        });
        setApiError("") // clears all previous error message
        navigate('/loccalevents')
      } else {
        const errorData = await res.json()
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
        setApiError(errorMessage)
      }
    } catch (error) {
      console.log('Error creating Organizer: ', error);
      setApiError('Error creating Organizer')
    }
        console.log("Organizer data:", OrganizerData)
    }

  return (
    <div>
      <form
        className="flex flex-col justify-around items-center my-10"
        onSubmit={handleSubmit}
      >
        <input
          id="name"
          name="name"
          type="text"
          value={OrganizerData.name}
          autoComplete="name"
          onChange={handleChange}
          placeholder="Organizer Name"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />

        <input
          id="email"
          name="email"
          type="email"
          value={OrganizerData.email}
          autoComplete="email"
          onChange={handleChange}
          placeholder="Organizer email"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />

        <input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          value={OrganizerData.phoneNumber}
          autoComplete="phoneNumber"
          onChange={handleChange}
          placeholder="Organizer Phone number"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />

        <input
          id="website"
          name="website"
          type="text"
          value={OrganizerData.website}
          autoComplete="website"
          onChange={handleChange}
          placeholder="Organizer website"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />

        <input
          id="city"
          name="city"
          type="text"
          value={OrganizerData.city}
          autoComplete="city"
          onChange={handleChange}
          placeholder="Organizer City"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />

        <input
          id="country"
          name="country"
          type="country"
          value={OrganizerData.country}
          autoComplete="country"
          onChange={handleChange}
          placeholder="Organizer Country"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />

        <input
          id="accountDetails"
          name="accountDetails"
          type="text"
          value={OrganizerData.accountDetails}
          autoComplete="accountDetails"
          onChange={handleChange}
          placeholder="Organizer Account Details"
          className="w-full h-16 mb-10 rounded-2xl p-4 border-[0.2em] text-slate-400 text-[0.9em] border-black shadow-md"
          required
        />
        {apiError && <p className="my-2 text-sm text-red-500">{apiError}</p>}

        <Button
          text="Submit"
          bgColor="red"
          textColor="white"
          btnWidth={300}
          btnHeight={60}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CreateOrganizer
