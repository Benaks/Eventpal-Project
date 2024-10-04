import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Button from "../utils/Button";
import Userimg from "../../assets/logo.png"
import { fetchData } from "../api/data";
import { AuthContext } from "../auth/AuthContext";
import Logout from "../auth/Logout";
import Logo from "../utils/Logo";

const SignedNav = ({ handleKeyPress }) => {
  const { setIsLoading, setIsSearching } = useContext(AuthContext);
  const [nav, setNav] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");  
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  const menuItems = [
    {
      text: "Locate Events",
      link: "/locate",
    },
    {
      text: "Create events",
      link: "/create-organizer",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Help center",
      link: "/help",
    },

    {
      text: "Be an Organizer",
      link: "/create-organizer",
    },
  ];

  // func to handle searching of items
 const handleSearch = async () => {
  setIsLoading(true);
  const { data, error } = await fetchData(searchTerm);
  if (error) {
    setError(error);
    setEventData(null);
  } else {
    setError(null);
    setEventData(data);
  }
  setIsLoading(false);
};

// func to handle change on search box
const handleChange = (e)=> {
  setSearchTerm(e.target.value)
}

// function to handle keypress on search box (handleKeyPress is a prop from Landing)
handleKeyPress = (e)=> {
  e.key === 'Enter' ? handleSearch() : null;
  setIsSearching(true)
} 

  return (
    <header className="w-full py-2 px-1 md:px-4 flex flex-col justify-center items-center">
      <nav className="flex justify-between md:justify-around items-center w-full h-auto">
        {/* logo */}
        <Logo />

        {/* desktop search ctn */}
        <div className="bg-white p-1 w-full md:w-[40%] lg:w-[25%] shadow-2xl rounded-lg h-auto my-2">
          <i className="text-gray-400 font-semibold text-sm md:text-lg lg:text-2xl absolute m-1">
            <FiSearch />
          </i>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Search events ..."
            className="border-none outline-none mx-6 md:mx-8 lg:mx-10 placeholder:text-xs w-[85%] h-6 md:h-8"
          />
        </div>

        {/* desktop navbar */}
        <div className="hidden lg:flex text-gray-600 font-thin bg-purple-900">
          {menuItems.map((item) => (
            <li
              key={item.text}
              className="font-semibold px-3 text-sm cursor-pointer list-none"
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </div>

        {/* condition to display mobile menu bar */}
        <div
          onClick={() => setNav(!nav)}
          className="lg:hidden text-slate-500 cursor-pointer mx-4"
        >
          {!nav ? (
            <AiOutlineMenu size={25} />
          ) : (
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={25}
              className=""
            />
          )}
        </div>

        {/* user dp */}
          <Link to="/user_profile">
            <div className="hidden md:flex justify-around items-center">
          <img
            className="h-12 w-12 border-2 border-red-500 rounded-full object-cover"
            src={Userimg}
          />
          </div>
          </Link>
       
      </nav>

      {/* mobile nav box */}
      {!nav ? null : (
        <ul className="w-full h-[50vh] bg-slate-300 flex flex-col justify-center my-4">
          {menuItems.map((item) => (
            <li key={item.text} className="cursor-pointer p-2 flex w-full ">
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
          <Link to="/user_profile">
            <img
              className="block md:hidden h-12 w-12 border-2 border-red-500 rounded-full object-cover"
              src={Userimg}
            />
          </Link>
        </ul>
      )}
    </header>
  );
};

export default SignedNav;
