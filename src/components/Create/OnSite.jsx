import DragDrop from "./DragDrop";
const OnSite = ({data, handleChange}) => {
  return (
    <div>
      <p className="font-semibold pb-1">Venue Address</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex flex-col">
          <input
            type="text"
            name="event_state"
            placeholder="State"
            value={data.event_state}
            onChange={handleChange}
            className="py-3 px-4 rounded-md border border-black"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="event_town"
            placeholder="Town/Area"
            value={data.event_town}
            onChange={handleChange}
            className="py-3 px-4 rounded-md border border-black"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            name="event_street"
            placeholder="Street"
            value={data.event_street}
            onChange={handleChange}
            className="py-3 px-4 rounded-md border border-black"
          />
        </div>
      </div>

      {/* Upload photo for venue */}
      <div className="my-6">
        <p className="font-semibold pb-1">Upload Photo of the Place</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DragDrop />
          <DragDrop />
          <DragDrop />
        </div>
      </div>
    </div>
  );
}

export default OnSite
