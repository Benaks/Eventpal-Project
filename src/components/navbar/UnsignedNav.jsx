import { useState, useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Logo from "../utils/Logo";
import Button from "../utils/Button";
import { fetchData } from "../api/data";
import { AuthContext } from "../auth/AuthContext";

const UnsignedNav = ({ handleKeyPress }) => {
  const { setIsLoading, setIsSearching } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);

  const menuRef = useRef(null);

  const menuItems = [
    { text: "Locate Events", link: "/SignUp" },
    { text: "Create Events", link: "/SignUp" },
    { text: "Blog", link: "/blog" },
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

   handleKeyPress = (e) => {
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
    <header className="w-full py-2 px-4 flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full h-auto">
        {/* Logo */}
        <Logo />

        {/* Desktop Navbar */}
        <div className="hidden lg:flex text-gray-600 font-thin">
          {menuItems.map((item) => (
            <li
              key={item.text}
              className="font-semibold px-3 text-sm cursor-pointer list-none"
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </div>

        {/* Desktop Search Container */}
        <div className="bg-white p-1 w-full md:w-[40%] lg:w-[25%] shadow-2xl rounded-lg h-auto my-2 relative">
          <FiSearch className="text-gray-400 font-bold text-md md:text-lg lg:text-2xl absolute m-1" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Search events ..."
            className="border-none outline-none mx-6 md:mx-8 lg:mx-10 placeholder:text-xs w-[75%] lg:w-[85%] h-6 md:h-8"
          />
        </div>

        {/* Login & Sign Up Container */}
        <div className="hidden md:flex justify-around items-center lg:w-[18%]">
          <Link to="/SignIn">
            <Button
              text="Login"
              bgColor="transparent"
              textColor="red"
              btnWidth={100}
              btnHeight={40}
              textSize={12}
            />
          </Link>
          <Link to="/SignUp">
            <Button
              text="Sign Up"
              bgColor="red"
              textColor="#fff"
              btnWidth={100}
              btnHeight={40}
              textSize={12}
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-slate-500 cursor-pointer mx-4">
          {!nav ? (
            <AiOutlineMenu onClick={() => setNav(true)} size={25} />
          ) : (
            <AiOutlineClose onClick={() => setNav(false)} size={25} />
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {nav && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 w-full h-screen bg-slate-700 bg-opacity-90 flex flex-col items-center justify-center"
        >
          <ul className="w-full h-auto bg-slate-300 flex flex-col justify-center text-center py-4">
            {/* Login and Sign Up Buttons */}
            <div className="flex md:hidden justify-around items-center">
              <Link to="/SignIn">
                <Button
                  text="Login"
                  bgColor="transparent"
                  textColor="red"
                  btnWidth={100}
                  btnHeight={40}
                  textSize={12}
                />
              </Link>
              <Link to="/SignUp">
                <Button
                  text="Sign Up"
                  bgColor="red"
                  textColor="#fff"
                  btnWidth={100}
                  btnHeight={40}
                  textSize={12}
                />
              </Link>
            </div>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <li
                key={item.text}
                className="cursor-pointer p-4 hover:bg-gray-200 transition-all duration-300"
              >
                <Link to={item.link} onClick={() => setNav(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default UnsignedNav;
