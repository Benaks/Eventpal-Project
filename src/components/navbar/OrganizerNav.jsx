import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Button from "../utils/Button";
import Userimg from "../../assets/logo.png";
import { AuthContext } from "../auth/AuthContext";
import { fetchData } from "../api/data";
import Logo from "../utils/Logo";

const OrganizerNav = () => {
  const { setIsLoading, setIsSearching } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  const menuRef = useRef(null);

  const menuItems = [
    { text: "Create Events", link: "/create" },
    { text: "Locate Events", link: "/locatePage" },
    { text: "Tickets", link: "/tickets" },
    { text: "Help Center", link: "/help" },
  ];

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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setIsSearching(true);
    }
  };

  const handleOutsideClick = (e) => {
    if (nav && menuRef.current && !menuRef.current.contains(e.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [nav]);

  return (
    <header className="w-full py-2 px-1 md:px-4 flex flex-col justify-center items-center">
      <nav className="flex justify-between md:justify-around items-center w-full h-auto">
        <Logo />
        <div className="bg-white p-1 w-full md:w-[40%] lg:w-[25%] shadow-2xl rounded-lg h-auto my-2 relative">
          <FiSearch className="text-gray-400 font-semibold text-sm md:text-lg lg:text-2xl absolute m-1" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Search events ..."
            className="border-none outline-none mx-6 md:mx-8 lg:mx-10 placeholder:text-xs w-[85%] h-6 md:h-8"
          />
        </div>

        <div className="hidden lg:flex text-gray-600 font-thin">
          {menuItems.map((item) => (
            <li
              key={item.link}
              className="font-semibold px-3 text-sm cursor-pointer list-none"
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="lg:hidden text-slate-500 cursor-pointer mx-4"
        >
          {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>

        <Link to="/organizer_profile">
          <div className="hidden md:flex justify-around items-center">
            <img
              className="h-12 w-12 border-2 border-red-500 rounded-full object-cover"
              src={Userimg}
              alt="User"
            />
          </div>
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {nav && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 w-full h-screen bg-slate-700 bg-opacity-90 flex flex-col items-center justify-center"
        >
          <ul className="w-full h-auto bg-slate-300 flex flex-col justify-center text-center py-4">
            {menuItems.map((item) => (
              <li
                key={item.link}
                className="cursor-pointer p-4 hover:bg-gray-200 transition-all duration-300"
              >
                <Link to={item.link} onClick={() => setNav(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
            <Link to="/organizer_profile">
              <img
                className="block md:hidden h-12 w-12 border-2 border-red-500 rounded-full object-cover mx-auto"
                src={Userimg}
                alt="User"
              />
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default OrganizerNav;
