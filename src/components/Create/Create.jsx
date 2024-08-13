import DragDrop from "./DragDrop";
import Button from "./Button";
import { useState } from "react";
import OnSite from "./OnSite";
import Online from "./Online";
import Pending from "./Pending";

const Create = () => {
  const [venue, setVenue] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState({
    // event_name: "",
    // event_date: "",
    // event_image: "",
    // event_location: "",
    // event_category: "",
    // event_description: "",
    // event_start_time: "",
    // event_end_time: "",
    // event_price: "",
    // event_state: "",
    // event_town: "",
    // event_street: "",
    // event_website: "",
    // event_link: "",
    // event_type: "",
    // platform_details: "",

    event_attendees: "",
    event_date: "",
    event_description: "",
    event_end_time: "",
    event_id: "",
    event_image: "",
    event_state: "",
    event_town: "",
    event_street: "",
    event_name: "",
    event_owner: "",
    event_start_time: "",
    event_type: "",
  });

  const handleOnSite = () => {
    setVenue("onSite");
  };
  const handleOnline = () => {
    setVenue("online");
  };
  const handleToBeAnnounced = () => {
    setVenue("unAnnounced");
  };

  const handlePricing = () => {
    setPrice("free");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      event_attendees: data.event_attendees,
      event_date: data.event_date,
      event_description: data.event_description,
      event_end_date: data.event_end_time,
      event_id: data.event_id,
      event_image: data.event_image,
      event_location: [data.event_state, data.event_town, data.event_street],
      event_name: data.event_name,
      event_owner: data.event_owner,
      event_start_date: data.event_start_time,
      event_type: data.event_type,
    };


    try {
      const API_URL = `${
        import.meta.env.VITE_APP_EVENTRYBE_API_URL
      }/create_event`;
      // const API_URL2 = `${import.meta.env.VITE_APP_EVENTRYBE_API_URL}/ticket`;
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const result = await res.json();
        console.log("Successfully created event", result);
        setData(result);
      } else {
        console.error("Error creating event", res.status, res.statusText);
      }
    } catch (error) {
      console.error("Error creating event", error);
    }
    console.log(data);
  };

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
            <div className="flex flex-col">
              <label htmlFor="event_date" className="pb-1 font-semibold">
                Date
              </label>
              <input
                type="date"
                name="event_date"
                placeholder="choose a date"
                value={data.event_date}
                onChange={handleChange}
                className="py-3 px-4 rounded-md border border-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="event_start_time" className="pb-1 font-semibold">
                Begins at
              </label>
              <input
                type="time"
                name="event_start_time"
                value={data.event_start_time}
                onChange={handleChange}
                className="py-3 px-4 rounded-md border border-black"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="event_end_time" className="pb-1 font-semibold">
                Ends at
              </label>
              <input
                type="time"
                name="event_end_time"
                value={data.event_end_time}
                onChange={handleChange}
                className="py-3 px-4 rounded-md border border-black"
              />
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col mb-6">
            <label htmlFor="event_category" className="font-bold">
              Category
            </label>
            <select
              name="event_category"
              // value={data.event_category}
              // onChange={handleChange}
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

          {/* Add price  */}
          {/* <div className="flex flex-col mb-6">
            <label htmlFor="pricing" className="pb-1 font-semibold">
              Add price
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ticket price"
                className="py-3 px-4 rounded-md border border-black w-full md:w-48"
              />
              <Button text="free" onClick={handlePricing} />
            </div>
          </div> */}

          {/* Drag and drop */}
          <div className="my-6">
            <p className="font-semibold">Upload photo</p>
            <DragDrop
              event_image={data.event_image}
              handleChange={handleChange}
            />
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
              <Button text="venue" onClick={handleOnSite} />
              <Button text="online" onClick={handleOnline} />
              <Button text="pending" onClick={handleToBeAnnounced} />
            </div>

            {/* Venue Address */}
            {venue === "onSite" && <OnSite data={data} handleChange={handleChange} />}

            {venue === "online" && <Online />}

            {venue === "unAnnounced" && (
              <Pending />
            )}
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

          {/* Website or link */}
          {/* <div className="flex flex-col mb-6">
            <label htmlFor="event_website" className="mb-1 font-semibold">
              Website or link
            </label>
            <input
              type="text"
              name="event_website"
              placeholder="https://"
              value={data.event_website}
              onChange={handleChange}
              className="w-full py-3 px-4 rounded-md border border-black"
            />
          </div> */}
          <Button text="submit" type="submit" onClick={handleSubmit} />
        </div>
      </section>
    </div>
  );
};

export default Create;




