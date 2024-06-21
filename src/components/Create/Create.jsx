import DragDrop from "./DragDrop";
import Button from "./Button";
import { useState, useRef } from "react";

const Create = () => {
  const [venue, setVenue] = useState("");
  const [data, setData] = useState([]);
  const [price, setPrice] = useState("");
  // const [online, setOnline]= useState('')
  // const [noVenue, setNoVenue] = useState('')

  const handleOnSite = () => {
    setVenue("onSite");
  };
  const handleOnline = () => {
    setVenue("online");
  };
  const handleToBeAnnounced = () => {
    setVenue("unAnnounced");
  };

  const nameRef = useRef(null);
  const dateRef = useRef(null);
  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);
  const stateRef = useRef(null);
  const townRef = useRef(null);
  const streetRef = useRef(null);
  const descRef = useRef(null);
  const websiteRef = useRef(null);

  const handlePricing = () => {
    const btn = "free";
    setPrice(btn);
  };

  // const handleSubmit = async () => {
  //   const formData = {
  //     name: nameRef.current.value,
  //     date: dateRef.current.value,
  //     time: {
  //       start: startTimeRef.current.value,
  //       end: endTimeRef.current.value,
  //     },
  //     price: price,
  //     location: {
  //       venue: {
  //         state: stateRef.current.value,
  //         town: townRef.current.value,
  //         street: streetRef.current.value,
  //       },
  //       online: venue === "online",
  //       toBeAnnounced: venue === "unAnnounced",
  //     },
  //     desc: descRef.current.value,
  //     website: websiteRef.current.value,
  //   };

  //   try {
  //     const API_URL = `${
  //       import.meta.env.VITE_APP_EVENTRYBE_API_URL
  //     }/create event`;
  //     const res = await fetch(API_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (res.ok) {
  //       const result = await res.json();
  //       console.log("Successfully created event", result);
  //       setData(result);
  //     } else {
  //       console.error("Error creating event", res.status, res.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error creating event", error);
  //   }
  // };
  
  const handleSubmit = () => {
    const formData = {
      name: nameRef.current.value,
      date: dateRef.current.value,
      time: {
        start: startTimeRef.current.value,
        end: endTimeRef.current.value,
      },
      price: price,
      location: {
        venue: {
          state: stateRef.current.value,
          town: townRef.current.value,
          street: streetRef.current.value,
        },
        online: venue === "online",
        toBeAnnounced: venue === "unAnnounced",
      },
      desc: descRef.current.value,
      website: websiteRef.current.value,
    };
    setData(formData)
    console.log('Form data:', formData);
  };

  return (
    //   main ctn
    <div className=" my-20 flex justify-center font-poppins">
      {/* create section */}
      <section className="flex flex-col justify-around h-full w-3/4 lg:w-2/4">
        {/* headers */}
        <div className="mb-20">
          <h1 className="text-4xl font-bold">Basic details</h1>
          <p className="font-semibold text-md">
            This section contains the basic details of your events
          </p>
        </div>

        {/* Name of Event */}
        <div className="flex flex-col mb-10">
          <label htmlFor="event" className="text-[1.2em] mb-1 font-[600]">
            Name of Event
          </label>
          <input
            type="text"
            placeholder="Event title"
            ref={nameRef}
            className="py-4 px-4 rounded-md border-black border-[0.2em]"
          />
        </div>

        {/* Date and time inputs */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col">
            <label htmlFor="date" className="text-[1.2em] pb-1 font-[600]">
              Date
            </label>
            <input
              type="date"
              placeholder="choose a date"
              ref={dateRef}
              className="py-4 px-4 rounded-md border-black border-[0.2em]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="Start Time"
              className="text-[1.2em] pb-1 font-[600]"
            >
              Begins at
            </label>
            <input
              type="time"
              name=""
              id=""
              placeholder="00:00 AM"
              ref={startTimeRef}
              className="py-4 px-4 rounded-md border-black border-[0.2em]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="End Time" className="text-[1.2em] pb-1 font-[600]">
              End at
            </label>
            <input
              type="time"
              name=""
              id=""
              placeholder="00:00 PM"
              ref={endTimeRef}
              className="py-4 px-4 rounded-md border-black border-[0.2em]"
            />
          </div>
        </div>

        {/* Category */}
        <div className="py-4 px-4 rounded-md border-black border-[0.2em] w-48 mb-10">
          <label htmlFor="category" className="text-[1.2em] pr-4">
            Category
          </label>
          <select name="" id="">
            Select a Category
          </select>
        </div>

        {/* Add price  */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="pricing" className="text-[1.2em] pb-1 font-[600]">
              Add price
            </label>
            <div>
              <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Ticket price"
                className="py-4 px-4 rounded-md border-black border-[0.2em] w-48"
              />
              <Button text="free" onClick={handlePricing} />
            </div>
          </div>
        </div>

        {/* Drag and drop */}
        <div className="my-10">
          <p className="text-[1.2em]  font-[600]">Upload photo</p>
          <DragDrop />
        </div>

        {/* Location */}
        <section className=" flex flex-col justify-around">
          <div className="">
            <h1 className="font-bold text-3xl py-2">Location</h1>
            <p>
              Help people discover your event and let your atendees know where
              to show up
            </p>
          </div>
          {/* buttons */}
          <div className="my-10">
            <Button text="venue" onClick={handleOnSite} />
            <Button text="online" onClick={handleOnline} />
            <Button text="to be announced" onClick={handleToBeAnnounced} />
          </div>

          {/* Venue Address */}
          {venue === "onSite" && (
            <div>
              <p className="font-[600] pb-1 text-[1.2em]">Venue Address</p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="State"
                    ref={stateRef}
                    className="py-4 px-4 rounded-md border-black border-[0.2em]"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Town/Area"
                    ref={townRef}
                    className="py-4 px-4 rounded-md border-black border-[0.2em]"
                  />
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Street"
                    ref={streetRef}
                    className="py-4 px-4 rounded-md border-black border-[0.2em]"
                  />
                </div>
              </div>

              {/* Upload photo for venue */}
              <div className="my-8">
                <p className="font-[600] pb-1 text-[1.2em]">
                  Upload Photo of the Place
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <DragDrop />
                  <DragDrop />
                  <DragDrop />
                </div>
              </div>
            </div>
          )}

          {venue === "online" && <p>This is the section for online events</p>}

          {venue === "unAnnounced" && (
            <p>This is the section for unknown date events</p>
          )}
        </section>

        {/* Short Description */}
        <div>
          <p className="font-[600] pb-1 text-[1.2em]">Short description</p>
          <textarea
            name=""
            id=""
            cols="10"
            rows="10"
            placeholder="Description"
            ref={descRef}
            className="py-4 px-4 rounded-md border-black border-[0.2em] w-3/4 h-[12em] mb-10"
          ></textarea>
        </div>

        {/* Website or link */}
        <div className="flex flex-col mb-10">
          <label htmlFor="event" className="text-[1.2em] mb-1 font-[600]">
            Website or link
          </label>
          <div>
            <input
              type="text"
              placeholder="https://"
              disabled
              className="w-1/4 py-4 px-4 rounded-md border-black border-[0.2em]"
            />
            <input
              type="text"
              placeholder="URL"
              ref={websiteRef}
              className="w-3/4 py-4 px-4 rounded-md border-black border-[0.2em]"
            />
          </div>
        </div>
        <Button text="submit" onClick={handleSubmit} />
      </section>
    </div>
  );
};

export default Create;
