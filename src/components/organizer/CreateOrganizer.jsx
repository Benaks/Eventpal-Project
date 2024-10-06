import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";
import { AuthContext } from "../auth/AuthContext";
import { fetchUserId } from "../query/user-id";

const CreateOrganizer = () => {
  const [apiError, setApiError] = useState("");
  const [organizerData, setOrganizerData] = useState({
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
  });

  const navigate = useNavigate();
  const { setIsOrganizer } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setOrganizerData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { UserId } = await fetchUserId();
    const API_URL = `${
      import.meta.env.VITE_APP_EVENTRYBE_API_URL
    }/create_organizer`;
    const formData = new FormData();

    Object.entries({ ...organizerData, user: UserId }).forEach(
      ([key, value]) => {
        formData.append(`organizer_${key}`, value);
      }
    );

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Successfully registered Organizer", result);
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
        });
        setApiError("");
        setIsOrganizer(true);
        navigate("/localevents");
      } else {
        const errorData = await res.json();
        console.error(
          "Error registering Organizer:",
          res.status,
          res.statusText,
          errorData
        );
        setApiError(
          errorData.non_field_errors?.[0] || "Error registering organizer."
        );
      }
    } catch (error) {
      console.error("Error creating Organizer:", error);
      setApiError("Error creating Organizer");
    }

    console.log("Organizer data:", organizerData);
  };

  const inputData = [
    {
      label: "Organizer Name",
      name: "name",
      type: "text",
      placeholder: "John Doe",
      required: true,
    },
    {
      label: "Organizer Description",
      name: "desc",
      type: "text",
      placeholder: "I am a graphics designer ...",
      required: true,
    },
    {
      label: "Organizer Email",
      name: "email",
      type: "email",
      placeholder: "johndoe@gmail.com",
      required: true,
    },
    {
      label: "Organizer Display Image",
      name: "image",
      type: "file",
      required: true,
    },
    {
      label: "Organizer Phone Number",
      name: "phoneNumber",
      type: "tel",
      placeholder: "+1 234 5678 90",
      required: true,
    },
    {
      label: "Organizer Website",
      name: "website",
      type: "url",
      placeholder: "https://johndoe.com",
      required: true,
    },
    {
      label: "Organizer Address",
      name: "address",
      type: "text",
      placeholder: "No. 24 Alen Kai street",
      required: true,
    },
    {
      label: "Organizer City",
      name: "city",
      type: "text",
      placeholder: "Florida",
      required: true,
    },
    {
      label: "Organizer Country",
      name: "country",
      type: "text",
      placeholder: "United States",
      required: true,
    },
    {
      label: "Organizer Account Details",
      name: "accountDetails",
      type: "text",
      placeholder: "0634567289",
      required: true,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <form
        className="flex flex-col justify-around items-center my-10 w-[90%] md:w-[80%] lg:w-[50%]"
        onSubmit={handleSubmit}
      >
        {inputData.map(({ label, name, type, placeholder, required }) => (
          <div
            className="flex flex-col md:flex-row justify-between items-start w-full my-2"
            key={name}
          >
            <label className="text-sm md:text-md my-1">{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              onChange={handleChange}
              className="w-full md:w-3/4 h-10 md:h-12 rounded-lg p-4 my-1 text-slate-400 text-[0.9em] shadow-md"
            />
          </div>
        ))}

        {apiError && <p className="my-2 text-sm text-red-500">{apiError}</p>}

        <Button
          text="Be an Organizer"
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
