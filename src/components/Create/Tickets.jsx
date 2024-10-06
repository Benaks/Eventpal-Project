import { useState, useMemo, useCallback, useEffect } from "react";
import { fetchEvents } from "../query/events";
import { fetchOrganizerId } from "../query/organizer-id";
import Button from "./Button";

const Tickets = () => {
  const [ticketEvents, setTicketEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [data, setData] = useState({
    ticket_name: "",
    ticket_desc: "",
    ticket_price: "",
    ticket_quant: null,
    ticket_avial_date: "",
    ticket_per_user: null,
    ticket_event: null,
    ticket_holders: [],
  });

  // Fetch events and assign to ticket_events
  useEffect(() => {
    const getAllOrganizerEvents = async () => {
      try {
        const { orgId, error: orgIdError } = await fetchOrganizerId();
        const { allEvents, error: eventsError } = await fetchEvents();

        if (orgId && allEvents) {
          const organizerEvents = allEvents.results.filter(
            (event) => event.event_owner === orgId
          );
          console.log("Organizer events are: ", organizerEvents);
          setTicketEvents(organizerEvents);

          if (organizerEvents.length > 0) {
            const lastEventIndex = organizerEvents.length - 1; // Get the last index
            setSelectedEvent(organizerEvents[lastEventIndex].event_id); // Use event_id here
            setData((prevData) => ({
              ...prevData,
              ticket_event: organizerEvents[lastEventIndex].event_id,
            }));
          }
        } else {
          console.log("No organizer ID or organizer events found.");
        }
      } catch (err) {
        console.log("Error fetching organizer ID:", err.message);
      }
    };

    getAllOrganizerEvents();
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSelectChange = useCallback((e) => {
    const selectedEventId = e.target.value;
    setSelectedEvent(selectedEventId);

    // Update ticket_event in the data state
    setData((prevData) => ({ ...prevData, ticket_event: selectedEventId }));
    console.log("The selected event ID is: ", selectedEventId);
  }, []);

  const handleTicketPrice = () => {
    setData((prevData) => ({ ...prevData, ticket_price: 0 }));
  };

  const ticketsFormData = useMemo(() => {
    const formData = new FormData();
    formData.append("ticket_name", data.ticket_name);
    formData.append("ticket_description", data.ticket_desc);
    formData.append("ticket_price", data.ticket_price);
    formData.append("ticket_quantity", data.ticket_quant);
    formData.append("ticket_availability_date", data.ticket_avial_date);
    formData.append("max_tickets_per_user", data.ticket_per_user);
    formData.append("ticket_event", data.ticket_event);
    formData.append("ticket_holders", data.ticket_holders);
    return formData;
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data before submit:", data); // Log form data for debugging
    try {
      const TICKETS_API_URL = `${
        import.meta.env.VITE_APP_EVENTRYBE_API_URL
      }/generate_tickets`;

      const res = await fetch(TICKETS_API_URL, {
        method: "POST",
        body: ticketsFormData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Successfully created ticket", result);
        setData((prevData) => ({ ...prevData, ...result })); // Merge new data
      } else {
        const errorMessage = await res.text(); // Get the error message
        console.error("Error creating ticket", errorMessage);
      }
    } catch (error) {
      console.error("Error creating ticket", error);
    }
  };

  const inputData = [
    {
      label: "Ticket Name",
      name: "ticket_name",
      required: true,
      placeholder: "Front row seats",
      value: data.ticket_name,
      type: "text",
    },
    {
      label: "Ticket Description",
      name: "ticket_desc",
      required: true,
      placeholder:
        "Enjoy an evening of entertainment with a world-class performance.",
      value: data.ticket_desc,
      type: "text",
    },
    {
      label: "Ticket Quantity",
      name: "ticket_quant",
      required: true,
      placeholder: "100",
      value: data.ticket_quant,
      type: "number",
    },
    {
      label: "Ticket Availability Date",
      name: "ticket_avial_date",
      required: true,
      value: data.ticket_avial_date,
      type: "datetime-local",
    },
    {
      label: "Max Tickets per User",
      name: "ticket_per_user",
      required: true,
      placeholder: "5",
      value: data.ticket_per_user,
      type: "number",
    },
  ];

  return (
    <div className="bg-gray-200 my-5 rounded-xl p-4">
      {inputData.map((item) => (
        <div
          key={item.name}
          className="flex justify-center items-center space-x-4 my-4"
        >
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            value={item.value}
            onChange={handleChange}
            placeholder={item.placeholder}
            required={item.required}
            className="py-3 px-4 rounded-md border border-black w-full md:w-3/4"
          />
        </div>
      ))}

      <div className="flex justify-center items-center space-x-4 my-4">
        <label htmlFor="ticket_price">Ticket Price</label>
        <input
          type="number"
          name="ticket_price"
          value={data.ticket_price}
          onChange={handleChange}
          placeholder="Ticket price"
          className="py-3 px-4 rounded-md border border-black w-full md:w-72"
        />
        <Button text="Set to Free" onClick={handleTicketPrice} />
      </div>

      <div className="flex justify-center items-center space-x-4 my-4">
        <label htmlFor="ticket_event">Ticket Event</label>
        <select
          value={selectedEvent}
          onChange={handleSelectChange}
          className="py-3 px-4 rounded-md border border-black w-full md:w-72"
        >
          {ticketEvents.map((event) => (
            <option key={event.event_id} value={event.event_id}>
              {event.event_name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <Button text="Submit" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Tickets;
