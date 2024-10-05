import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DragDrop from "./DragDrop";
import Button from "./Button";
import OnSite from "./OnSite";
import Online from "./Online";
import Pending from "./Pending";
import Tickets from "./Tickets";
import { fetchOrganizerId } from "../query/organizer-id";
import { fetchUserId } from "../query/user-id";

const Create = () => {
  const [eventLocation, setEventLocation] = useState("");
  const [venue, setVenue] = useState("");
  const [data, setData] = useState({
    event_attendees: "",
    event_image: null,
    event_description: "",
    event_end_date: "",
    event_state: "",
    event_town: "",
    event_street: "",
    event_name: "",
    event_location: "",
    event_start_date: "",
    event_type: null,
    event_owner: "",
    event_link: "",
    event_platform_details: "",
  });

  const navigate = useNavigate();

  // Function to handle image changes from DragDrop
  const handleImageChange = useCallback((file) => {
    setData((prevData) => ({ ...prevData, event_image: file }));
  }, []);

  // Fetch organizer ID and assign to event_owner and event_attendees
  useEffect(() => {
    const getOrganizerId = async () => {
      try {
        const { orgId, error } = await fetchOrganizerId();
        if (orgId) {
          console.log("Organizer id is: ", orgId);
          setData((prevData) => ({
            ...prevData,
            event_owner: orgId,
          }));
        } else {
          throw new Error(error || "No Organizer ID found");
        }
        // fetch user email and assign to event_attendees
        const { UserId, error: dataError } = await fetchUserId();
        if (UserId) {
          console.log("This is the id: ", UserId);
          setData((prevData) => ({
            ...prevData,
            event_attendees: UserId,
          }));
        } else {
          console.log("Erro trying to userId", dataError);
        }
      } catch (err) {
        console.log("Error fetching organizer ID:", err.message);
      }
    };

    getOrganizerId();
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  // Event handlers for venue
  const handleVenueChange = useCallback((newVenue) => {
  if (venue !== newVenue) {
      setVenue(newVenue);

      if (newVenue === "onSite") {
        setData((prevData) => ({
          ...prevData,
          event_type: "Onsite",
          // event_location: `${prevData.event_state},${prevData.event_town},${prevData.event_street}`
        }));
      } else if (newVenue === "online") {
        setData((prevData) => ({
          ...prevData,
          event_type: "Online",
          // event_location: prevData.event_link
        }));
      } else if (newVenue === "unAnnounced") {
        setData((prevData) => ({
          ...prevData,
          event_type: "", // Set to empty or a specific string if needed
          // event_location: "",
        }));
      }
  }
  }, []);

  useEffect(() => {
    if (venue === 'online') {
      setEventLocation(data.event_link);
    } else if (venue === 'onSite') {
      setEventLocation(
        `${data.event_state}, ${data.event_town}, ${data.event_street}`
      );
    } else {
      setEventLocation("");
    }
  }, [data.event_link, data.event_state, data.event_town, data.event_street]); // Include relevant dependencies

  // Create FormData for events and tickets
  const eventsFormData = useMemo(() => {
    const formData = new FormData();
    formData.append("event_name", data.event_name);
    formData.append("event_image", data.event_image);
    formData.append("event_description", data.event_description);
    formData.append("event_type", data.event_type);
    formData.append("event_start_date", data.event_start_date);
    formData.append("event_end_date", data.event_end_date);
    formData.append("event_location", eventLocation);
    formData.append("event_owner", data.event_owner);
    formData.append("event_attendees", data.event_attendees);
    return formData;
  }, [data, eventLocation]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Data before submit:", data); // Check values

    try {
      const EVENTS_API_URL = `${
        import.meta.env.VITE_APP_EVENTRYBE_API_URL
      }/create_event`;
      const TICKETS_API_URL = `${
        import.meta.env.VITE_APP_EVENTRYBE_API_URL
      }/generate_tickets`;

      const res = await fetch(EVENTS_API_URL, {
        method: "POST",
        body: eventsFormData,
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Successfully created event", result);
        setData((prevData) => ({ ...prevData, ...result })); // Merge new data
        navigate("/create-tickets");
      } else {
        const errorMessage = await res.text(); // Get the error message
        console.error("Error creating event:", errorMessage);
      }
    } catch (error) {
      console.error("Error creating event", error);
    }
  };

  const isFormComplete =
    data.event_name && data.event_start_date && data.event_end_date;

  return (
    <div className="my-20 flex justify-center font-poppins">
      <section className="flex flex-col justify-around h-full w-[90%] md:w-3/4 lg:w-2/4">
        <div className="mb-12">
          <h1 className="text-xl md:text-2xl font-bold">Basic details</h1>
          <p className="font-semibold text-sm md:text-md">
            This section contains the basic details of your events
          </p>
        </div>

        <div className="text-sm">
          {/* Name of Event */}
          <div className="flex flex-col mb-6">
            <label htmlFor="event_name" className="mb-1 font-semibold">
              Name of Event
            </label>
            <input
              type="text"
              name="event_name"
              placeholder="Event title"
              value={data.event_name}
              onChange={handleChange}
              className="py-3 px-4 rounded-md border border-black"
            />
          </div>

          {/* Date and time inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Category */}
            <div className="flex flex-col mb-6">
              <label htmlFor="event_category" className="font-bold">
                Category
              </label>
              <select
                name="event_category"
                className="py-3 px-4 rounded-md cursor-pointer border border-black w-full md:w-48 mb-4"
              >
                <option value="">Select Category</option>
                <option value="church">Church</option>
                <option value="party">Party</option>
                <option value="mosque">Mosque</option>
                <option value="concert">Concert</option>
                <option value="seminar">Seminar</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="event_start_date" className="pb-1 font-semibold">
                Begins at
              </label>
              <input
                type="datetime-local"
                name="event_start_date"
                value={data.event_start_date}
                onChange={handleChange}
                className="py-3 px-4 rounded-md border border-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="event_end_date" className="pb-1 font-semibold">
                Ends at
              </label>
              <input
                type="datetime-local"
                name="event_end_date"
                value={data.event_end_date}
                onChange={handleChange}
                className="py-3 px-4 rounded-md border border-black"
              />
            </div>
          </div>

          {/* Drag and drop */}
          <div className="my-6">
            <p className="font-semibold">Upload photo</p>
            <DragDrop handleChange={handleImageChange} />
          </div>

          {/* Location */}
          <section className="flex flex-col justify-around mb-6">
            <div>
              <h1 className="font-bold py-2">Location</h1>
              <p>
                Help people discover your event and let your attendees know
                where to show up
              </p>
            </div>

            {/* buttons */}
            <div className="flex flex-wrap justify-around items-center my-6">
              <Button
                text="Venue"
                onClick={() => handleVenueChange("onSite")}
              />
              <Button
                text="Online"
                onClick={() => handleVenueChange("online")}
              />
              <Button
                text="Pending"
                onClick={() => handleVenueChange("unAnnounced")}
              />
            </div>

            {/* Venue Address */}
            {venue === "onSite" && (
              <OnSite
                data={data}
                handleChange={handleChange}
                setEventLocation={setEventLocation}
              />
            )}

            {venue === "online" && (
              <Online
                data={data}
                handleChange={handleChange}
                setEventLocation={setEventLocation}
              />
            )}

            {venue === "unAnnounced" && <Pending />}
          </section>

          {/* Short Description */}
          <div className="mb-6">
            <p className="font-semibold pb-1">Short description</p>
            <textarea
              name="event_description"
              cols="10"
              rows="10"
              placeholder="Description"
              value={data.event_description}
              onChange={handleChange}
              className="py-3 px-4 rounded-md border border-black w-full h-[12em]"
            ></textarea>
          </div>
          <Button
            text="Next"
            type="submit"
            onClick={handleSubmit}
            disabled={!isFormComplete}
          />
        </div>
      </section>
    </div>
  );
};

export default Create;
