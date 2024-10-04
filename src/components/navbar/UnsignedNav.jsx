import { useState, useContext } from "react";
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


  const menuItems = [
    {
      text: "Locate Events",
      link: "/SignUp",
    },
    {
      text: "Create events",
      link: "/SignUp",
    },
    {
      text: "Blog",
      link: "/blog",
    },
    {
      text: "Help center",
      link: "/help",
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
    <header className="w-full py-2 px-4 flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full h-auto">
        {/* logo */}
       <Logo />

        {/* desktop navbar */}
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

        {/* deskotp search ctn */}
        <div className="bg-white p-1 w-full md:w-[40%] lg:w-[25%] shadow-2xl rounded-lg h-auto my-2">
          <i className="text-gray-400 font-bold text-md md:text-lg lg:text-2xl absolute m-1">
            <FiSearch />
          </i>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Search events ..."
            className="border-none outline-none mx-6 md:mx-8 lg:mx-10 placeholder:text-xs w-[75%] lg:w-[85%] h-6 md:h-8"
          />
        </div>
        {/* login & signin ctn */}
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

          <Link to="/SignUp" className="">
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

        {/* condition to display mobile menu bar */}
        <div className="lg:hidden text-slate-500 cursor-pointer mx-4">
          {!nav ? (
            <AiOutlineMenu onClick={() => setNav(true)} size={25} />
          ) : (
            <AiOutlineClose onClick={() => setNav(false)} size={25} />
          )}
        </div>
      </nav>

      {/* mobile nav box */}
      {!nav ? null : (
        <ul className="w-full h-[50vh] bg-slate-300 flex flex-col justify-around my-4">
          {/* login and signup ctn */}
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

            <Link to="/SignUp" className="">
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

          {menuItems.map((item) => (
            <li key={item.text} className="cursor-pointer p-2 flex w-full">
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default UnsignedNav;