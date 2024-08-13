import Button from "./Button";
const Tickets = ({ data, handlePricing, handleChange, setPrice }) => {
  return (
    <div className="bg-gray-200 my-5 rounded-xl">
      <label htmlFor="pricing" className="pb-1 font-semibold">
        Add Ticket
      </label>
      <div className="flex justify-center items-center space-x-4 my-4">
        <input
          type="text"
          name="ticket_name"
          value={data.ticket_name}
          onChange={handleChange}
          placeholder="Ticket name"
          className="py-3 px-4 rounded-md border border-black w-full md:w-3/4"
        />
      </div>
      <div className="flex justify-center items-center space-x-4 my-4 ">
        <input
          type="text"
          name="ticket_desc"
          value={data.ticket_desc}
          onChange={handleChange}
          placeholder="Ticket description"
          className="py-3 px-4 rounded-md border border-black w-full md:w-3/4"
        />
      </div>

      <div className="flex justify-center items-center space-x-4 my-4 ">
        <input
          type="number"
          name="ticket_price"
          value={data.ticket_price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Ticket price"
          className="py-3 px-4 rounded-md border border-black w-full md:w-72"
        />
        <Button text="free" onClick={handlePricing} />
      </div>
      <div className="flex justify-center items-center space-x-4 my-4 ">
        <input
          type="number"
          name="ticket_quant"
          value={data.ticket_quant}
          onChange={handleChange}
          placeholder="Ticket quantity"
          className="py-3 px-4 rounded-md border border-black w-full md:w-3/4"
        />
      </div>
      <div className="flex justify-center items-center space-x-4 my-4">
        <input
          type="date"
          name="ticket_avial_date"
          value={data.ticket_avial_date}
          onChange={handleChange}
          placeholder="Ticket avialability date"
          className="py-3 px-4 rounded-md border border-black w-full md:w-3/4"
        />
      </div>
      <div className="flex justify-center items-center space-x-4 my-4 ">
        <input
          type="number"
          name="ticket_per_user"
          value={data.ticket_per_user}
          onChange={handleChange}
          placeholder="Max Ticket per user"
          className="py-3 px-4 rounded-md border border-black w-full md:w-3/4"
        />
      </div>
    </div>
  );
};

export default Tickets;
