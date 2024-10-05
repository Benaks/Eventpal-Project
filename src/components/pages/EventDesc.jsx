import Footer from '../footers/Footer'
import CoverImg from '../assets/LocalCoverImg.webp'
import EventImg from  '../assets/concert.svg'
import { Link } from "react-router-dom";

function LocalEventsPage()  {
  return (
    <>
      <div className="bg-red-200 h-[40vh] my-5 font-poppins">
        <img src={CoverImg} alt="" srcset="" className="h-[100%] w-[100%]" />
      </div>

      <div className=" px-10 py-20 ">
        <h1 className="font-bold text-2xl pb-8">Event Description</h1>

        <div className="flex flex-col gap-6">
          <div className="flex gap-20">
            <p className="font-bold text-[1.2em]">Title</p>
            <p className="font-semibold text-gray-500">The Leverage Effect</p>
          </div>

          <div className="flex gap-20">
            <p className="font-bold text-[1.2em]">Date</p>
            <p className="font-semibold text-gray-500">Oct, 2021, 11am</p>
          </div>

          <div className="flex gap-20">
            <p className="font-bold text-[1.2em]">Time</p>
            <p className="font-semibold text-gray-500">11am</p>
          </div>

          <div className="flex gap-20">
            <p className="font-bold text-[1.2em]">Location</p>
            <p className="font-semibold text-gray-500">
              1000 Building Capacity. Federal University of Technology Minna.
            </p>
          </div>
        </div>

        <div className="py-10 flex flex-col gap-4">
          <p className="text-[1.2em] font-semibold">Event Image</p>
          <img src={EventImg} alt="" srcset="" className="w-[50vw]" />

          <div className=" py-5">
            <label className="text-[0.9em]" htmlFor="textarea">
              Leave a message
            </label> <br />
            <textarea
              className="border-2 p-2 text-[0.9em]"
              placeholder="Description"
              // id="textarea"
              // value={textValue}
              // onChange={handleChange}
              rows={4} // Adjust the number of visible rows as needed
              cols={50} // Adjust the width of the textarea as needed
            />
          </div>

          <div>
            <Link to="/Tickets">
              <button className="bg-secondary text-white px-4 py-2 rounded-md">
                Get Ticket's!
              </button>
            </Link>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LocalEventsPage