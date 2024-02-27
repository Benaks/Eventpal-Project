import DragDrop from "./DragDrop";

const Create = () => {
  return (
    //   main ctn
    <div className=" h-screen flex justify-center font-poppins">
      {/* create section */}
      <section className="flex flex-col justify-around h-full w-3/4 lg:w-2/4">
        {/* headers */}
        <div>
          <h1 className="text-4xl font-bold">Basic details</h1>
          <p className="font-semibold text-md">
            This section contains the basic details of your events
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="event" className="text-[1.2em] pb-4 font-[600]">
            Name of Event
          </label>
          <input
            type="text"
            placeholder="Event title"
            className="py-4 px-4 rounded-md border-black border-[0.2em]"
          />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="date" className="text-[1.2em] pb-4 font-[600]">
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
              className="text-[1.2em] pb-4 font-[600]"
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
            <label htmlFor="End Time" className="text-[1.2em] pb-4 font-[600]">
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

        <div className="py-4 px-4 rounded-md border-black border-[0.2em] w-48">
          <label htmlFor="category" className="text-[1.2em] pr-4">
            Category
          </label>
          <select name="" id="">
            Select a Category
          </select>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <label htmlFor="pricing" className="text-[1.2em] pb-4 font-[600]">
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

        <DragDrop/>

        <div>
          <label htmlFor="event">Name of Event</label>
          <input type="text" placeholder="Event title" />
        </div>
      </section>
    </div>
  );
};

export default Create;
