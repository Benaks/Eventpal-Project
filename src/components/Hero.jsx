import Heroimg from "../assets/concert.svg";
// import Location from "./Location";
import { AiOutlineDown } from "react-icons/ai";

function Hero() {
  return (
    <div
      className="h-[50vh] w-full  mx-30 px-2 md:px-10 lg:px-64 bg-cover bg-center md:h-[80vh]"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      <div className="flex flex-col w-full h-full justify-center items-center text-center  ">
        <h1 className="text-5xl px-20 font-bold   text-[white] md:text-6xl font-poppins leading-20">
          We have got your day lifely all in one place
        </h1>
        <p className=" text-[1.2em] py-10 px-20 text-[white] font-poppins">
          Create, Book, Plan Attend and Manage events seamlessly
        </p>

        <div className=" flex justify-between px-100">
          <button className="shadow-lg text-[1em] bg-purple-100 px-4 py-2 w-32 h-12  rounded-md text-slate-800 flex justify-between items-center font-[600] ">
            {" "}
            Location <AiOutlineDown className=" font-bold text-secondary" />{" "}
          </button>

          <form action="">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="search by artiste,date,time,city,town or event"
                className="shadow-lg focus:outline-none text-[1em] bg-purple-100 px-9 py-3 w-90 rounded-md placeholder:text-[0.6em] "
              />
            </div>
          </form>

          <button className=" focus:outline-none px-4 py-2 bg-secondary text-[white] text-[1em] rounded-lg font-[500]">
            search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
