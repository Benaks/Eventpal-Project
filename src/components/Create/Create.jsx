import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DragDrop from "./DragDrop";
import Button from "./Button";
import OnSite from "./OnSite";
import Online from "./Online";
import Pending from "./Pending";
import { fetchOrganizerId } from "../query/organizer-id";
import { fetchUserId } from "../query/user-id";

const Create = () => {
  const [eventLocation, setEventLocation] = useState(""); // Tracks event location dynamically
  const [venue, setVenue] = useState(""); // Tracks the selected venue type
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
    const [errors, setErrors] = useState({
      event_state: "",
      event_town: "",
      event_street: "",
    }); // state for tracking input errors
  const [apiError, setApiError] = useState(""); // Error message for API calls

  const navigate = useNavigate();

  // Handle image change from DragDrop
  const handleImageChange = useCallback((file) => {
    setData((prevData) => ({ ...prevData, event_image: file }));
  }, []);

  // Fetch organizer ID and assign to event_owner and event_attendees
  useEffect(() => {
    const fetchIds = async () => {
      try {
        const { orgId, error } = await fetchOrganizerId();
        if (orgId) {
          setData((prevData) => ({ ...prevData, event_owner: orgId }));
        } else {
          throw new Error(error || "No Organizer ID found");
        }

        const { UserId, error: userError } = await fetchUserId();
        if (UserId) {
          setData((prevData) => ({ ...prevData, event_attendees: UserId }));
        } else {
          console.error("Error fetching UserId", userError);
        }
      } catch (err) {
        console.error("Error fetching IDs:", err.message);
      }
    };
    fetchIds();
  }, []);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear field error when user types
  }, []);

  // Handle venue selection and adjust event type
  const handleVenueChange = useCallback(
    (newVenue) => {
      if (venue !== newVenue) {
        setVenue(newVenue);
        if (newVenue === "onSite") {
          setData((prevData) => ({
            ...prevData,
            event_type: "Onsite",
          }));
        } else if (newVenue === "online") {
          setData((prevData) => ({
            ...prevData,
            event_type: "Online",
          }));
        } else if (newVenue === "unAnnounced") {
          setData((prevData) => ({
            ...prevData,
            event_type: "",
          }));
        }
      }
    },
    [venue]
  );

  // Dynamically update event location based on venue type
  useEffect(() => {
    if (venue === "online") {
      setEventLocation(data.event_link);
    } else if (venue === "onSite") {
      setEventLocation(
        `${data.event_street}, ${data.event_town}, ${data.event_state}`
      );
    } else {
      setEventLocation("");
    }
  }, [
    venue,
    data.event_link,
    data.event_state,
    data.event_town,
    data.event_street,
  ]);

  // Basic form validation
  const validateForm = () => {
    let formErrors = {};

    if (!data.event_name) formErrors.event_name = "Event name is required.";
    if (!data.event_start_date)
      formErrors.event_start_date = "Start date is required.";
    if (!data.event_end_date)
      formErrors.event_end_date = "End date is required.";
    if (!data.event_description)
      formErrors.event_description = "Event description is required.";

    // Additional validation for venue-specific fields
    if (venue === "online" && !data.event_link) {
      formErrors.event_link = "Online event link is required.";
    }
    if (venue === "onSite") {
      if (!data.event_state)
        formErrors.event_state = "State is required for on-site events.";
      if (!data.event_town)
        formErrors.event_town = "Town is required for on-site events.";
      if (!data.event_street)
        formErrors.event_street = "Street is required for on-site events.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors found
  };

  // Prepare FormData for event submission
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
    formData.append("event_link", data.event_link); // Include the event link
    formData.append("event_platform_details", data.event_platform_details); // Include platform details
    return formData;
  }, [data, eventLocation]);

  // Submit event data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Form validation failed");
      return; // Prevent submission if validation fails
    }

    try {
      const EVENTS_API_URL = `${
        import.meta.env.VITE_APP_EVENTRYBE_API_URL
      }/create_event`;
      const res = await fetch(EVENTS_API_URL, {
        method: "POST",
        body: eventsFormData,
      });

      if (res.ok) {
        const result = await res.json();
        setData((prevData) => ({ ...prevData, ...result }));
        navigate("/create-tickets"); // Redirect on success
      } else {
        const errorMessage = await res.text();
        setApiError(
          errorMessage || "An unexpected error occurred. Please try again."
        );
        console.error("Error creating event:", errorMessage);
      }
    } catch (error) {
      setApiError(
        "An error occurred while creating the event. Please try again."
      );
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
            This section contains the basic details of your event
          </p>
        </div>

        {/* Event details form */}
        <div className="text-sm">
          {/* Event name */}
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
              className={`py-3 px-4 rounded-md border ${
                errors.event_name ? "border-red-500" : "border-black"
              }`}
            />
            {errors.event_name && (
              <p className="text-red-500 text-sm">{errors.event_name}</p>
            )}
          </div>

          {/* Date and time */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="event_start_date" className="pb-1 font-semibold">
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
            {/* Start date */}
            <div className="flex flex-col">
              <label htmlFor="event_start_date" className="pb-1 font-semibold">
                Begins at
              </label>
              <input
                type="datetime-local"
                name="event_start_date"
                value={data.event_start_date}
                onChange={handleChange}
                className={`py-3 px-4 rounded-md border ${
                  errors.event_start_date ? "border-red-500" : "border-black"
                }`}
              />
              {errors.event_start_date && (
                <p className="text-red-500 text-sm">
                  {errors.event_start_date}
                </p>
              )}
            </div>

            {/* End date */}
            <div className="flex flex-col">
              <label htmlFor="event_end_date" className="pb-1 font-semibold">
                Ends at
              </label>
              <input
                type="datetime-local"
                name="event_end_date"
                value={data.event_end_date}
                onChange={handleChange}
                className={`py-3 px-4 rounded-md border ${
                  errors.event_end_date ? "border-red-500" : "border-black"
                }`}
              />
              {errors.event_end_date && (
                <p className="text-red-500 text-sm">{errors.event_end_date}</p>
              )}
            </div>
          </div>

          {/* Image upload */}
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

            {/* Venue selection buttons */}
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
                errors={errors}
              />
            )}

            {venue === "online" && (
              <Online
                data={data}
                handleChange={handleChange}
                setEventLocation={setEventLocation}
                errors={errors}
              />
            )}

            {venue === "unAnnounced" && <Pending />}
            {errors.event_location && (
              <p className="text-red-500 text-sm">{errors.event_location}</p>
            )}
            {errors.event_link && (
              <p className="text-red-500 text-sm">{errors.event_link}</p>
            )}
          </section>

          {/* Short Description */}
          <div className="mb-6">
            <p className="font-semibold pb-1">Short description</p>
            <textarea
              name="event_description"
              rows="10"
              placeholder="Description"
              value={data.event_description}
              onChange={handleChange}
              className={`py-3 px-4 rounded-md border w-full ${
                errors.event_description ? "border-red-500" : "border-black"
              }`}
              style={{ resize: "none" }} // Prevents resizing to keep the textarea consistent
            ></textarea>
            {errors.event_description && (
              <p className="text-red-500 text-sm">{errors.event_description}</p>
            )}
          </div>

          {/* API error message */}
          {apiError && <p className="text-red-500 text-sm mb-4">{apiError}</p>}

          {/* Next Button */}
          <div className="flex justify-end">
            <Button
              text="Next"
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormComplete}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;


