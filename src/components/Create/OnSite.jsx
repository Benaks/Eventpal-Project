import DragDrop from "./DragDrop";

const OnSite = ({ data, handleChange, errors }) => {
  return (
    <div>
      <p className="font-semibold pb-1">Venue Address</p>

      {/* Venue Address Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col">
          <input
            type="text"
            name="event_state"
            placeholder="State"
            value={data.event_state}
            onChange={handleChange}
            className={`py-3 px-4 rounded-md border ${
              errors.event_state ? "border-red-500" : "border-black"
            }`}
          />
          {errors.event_state && (
            <p className="text-red-500 text-sm">{errors.event_state}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="event_town"
            placeholder="Town/Area"
            value={data.event_town}
            onChange={handleChange}
            className={`py-3 px-4 rounded-md border ${
              errors.event_town ? "border-red-500" : "border-black"
            }`}
          />
          {errors.event_town && (
            <p className="text-red-500 text-sm">{errors.event_town}</p>
          )}
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="event_street"
            placeholder="Street"
            value={data.event_street}
            onChange={handleChange}
            className={`py-3 px-4 rounded-md border ${
              errors.event_street ? "border-red-500" : "border-black"
            }`}
          />
          {errors.event_street && (
            <p className="text-red-500 text-sm">{errors.event_street}</p>
          )}
        </div>
      </div>

      {/* Upload photo for venue */}
      <div className="my-6">
        <p className="font-semibold pb-1">Upload Photo of the Place</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Allowing multiple DragDrop components for image uploads */}
          {Array.from({ length: 3 }, (_, index) => (
            <DragDrop key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnSite;
