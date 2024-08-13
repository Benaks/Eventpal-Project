const Online = ({ data, handleChange }) => {
  return (
    <div>
      <p className="font-semibold pb-1">Online Event Details</p>
      <div className="flex flex-col mb-6">
        <input
          type="text"
          name="event_link"
          placeholder="https://"
          value={data?.event_link || ""}
          onChange={handleChange}
          className="py-3 px-4 rounded-md border border-black"
        />
      </div>

      {/* <div className="flex flex-col mb-6">
        <label htmlFor="platform_details" className="mb-1 font-semibold">
          Platform Details
        </label>
        <textarea
          name="platform_details"
          placeholder="Zoom, Google Meet, etc."
          value={data?.event_platform_details || ""}
          onChange={handleChange}
          className="py-3 px-4 rounded-md border border-black"
        />
      </div> */}
    </div>
  );
};

export default Online;
