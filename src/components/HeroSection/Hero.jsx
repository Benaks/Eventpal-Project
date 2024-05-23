import Heroimg from "../../assets/concert.svg";
import { Link } from "react-router-dom";
// import Location from "./Location";
import { useContext } from "react";
import { AppContext } from "../../Landing";
import { AiOutlineDown } from "react-icons/ai";
import Button from "../Button";
import heroData from "./data";

function Hero() {
  const { inputLocation, setInputLocation, loadEventsData } =
    useContext(AppContext);
  return (
    <div
      className="h-[50vh] w-full  mx-30 px-2 md:px-10 bg-cover bg-center md:h-[80vh]"
      style={{ backgroundImage: `url(${Heroimg})` }}
    >
      <div className="flex flex-col w-full h-full justify-center items-center text-center  ">
        <h1 className="text-5xl px-20 font-bold   text-[white] md:text-6xl font-poppins leading-20">
          {heroData.Head}
        </h1>
        <p className=" text-[1.2em] py-10 px-20 text-[white] font-poppins">
          {heroData.Text}
        </p>

        <div className=" flex justify-between px-100">
          <input
            className="shadow-lg text-[1em] bg-purple-100 px-4 py-2 w-32 h-12  rounded-md text-slate-800 flex justify-between items-center font-[600]"
            placeholder="location"
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
          />
          <AiOutlineDown
            className=" font-bold text-secondary text-4xl cursor-pointer"
            onClick={loadEventsData}
          />

          <div className="relative mx-4">
            <input
              type="text"
              placeholder="search by artiste,date,time,city,town or event"
              className="shadow-lg focus:outline-none text-xl bg-purple-100 px-9 py-3 w-90 rounded-md placeholder:text-[0.6em] "
            />
          </div>

          <Link to="SearchApp">
            <Button
              text="search"
              bgColor="red"
              textColor="white"
              btnWidth="100px"
              btnHeight="40px"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
