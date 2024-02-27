import DragDrop from "./DragDrop";

const Create = () => {
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
                type="text"
                name=""
                id=""
                placeholder="Ticket price"
                className="py-4 px-4 rounded-md border-black border-[0.2em] w-48"
              />
              <button
                name=""
                id=""
                className="bg-red-500 p-4 w-48 rounded-md text-white font-bold text-2xl ml-10 shadow-xl"
              >
                Free
              </button>
            </div>
          </div>
        </div>

        {/* Dradg and drop */}
        <div className="my-10">
          <p className="text-[1.2em]  font-[600]">Upload photo</p>
          <DragDrop />
        </div>
        {/* 
        <div>
          <label htmlFor="event">Name of Event</label>
          <input type="text" placeholder="Event title" />
        </div> */}

        {/* Location */}
        <div className="py-8">
          <div>
            <h1 className="font-bold text-3xl py-2  ">Location</h1>
            <p>
              Help people discover your event and let your atendees know where
              to show up
            </p>
          </div>
          <div></div>
        </div>

        {/* Venue Address */}
        <div>
          <p className="font-[600] pb-1 text-[1.2em]">Venue Address</p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="State"
                className="py-4 px-4 rounded-md border-black border-[0.2em]"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name=""
                id=""
                placeholder="Town/Area"
                className="py-4 px-4 rounded-md border-black border-[0.2em]"
              />
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                name=""
                id=""
                placeholder="Street"
                className="py-4 px-4 rounded-md border-black border-[0.2em]"
              />
            </div>
          </div>
        </div>

        {/* Upload photo of place */}
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

        {/* Short Description */}
        <div>
          <p className="font-[600] pb-1 text-[1.2em]">
            Upload Photo of the Place
          </p>
          <textarea
            name=""
            id=""
            cols="10"
            rows="10"
            placeholder="Description"
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
              className="w-1/4 py-4 px-4 rounded-md border-black border-[0.2em]"
            />
            <input
              type="text"
              placeholder="URL"
              className="w-3/4 py-4 px-4 rounded-md border-black border-[0.2em]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
