const Online = ({ data, handleChange, errors }) => {
  return (
    <div>
      <p className="font-semibold pb-1">Online Event Details</p>

      {/* Event Link Input */}
      <div className="flex flex-col mb-6">
        <input
          type="text"
          name="event_link"
          placeholder="https://"
          value={data.event_link}
          onChange={handleChange}
          className={`py-3 px-4 rounded-md border ${
            errors.event_link ? "border-red-500" : "border-black"
          }`}
        />
        {errors.event_link && (
          <p className="text-red-500 text-sm">{errors.event_link}</p>
        )}
      </div>

      {/* Platform Details Input */}
      <div className="flex flex-col mb-6">
        <label htmlFor="platform_details" className="mb-1 font-semibold">
          Platform Details
        </label>
        <textarea
          name="platform_details"
          placeholder="Zoom, Google Meet, Skype etc."
          value={data.event_platform_details || ""}
          onChange={handleChange}
          className={`py-3 px-4 rounded-md border w-full ${
            errors.platform_details ? "border-red-500" : "border-black"
          }`}
          style={{ resize: "none" }} // Prevents resizing
        />
        {errors.platform_details && (
          <p className="text-red-500 text-sm">{errors.platform_details}</p>
        )}
      </div>
    </div>
  );
};

export default Online;
