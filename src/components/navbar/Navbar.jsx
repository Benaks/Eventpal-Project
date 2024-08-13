import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Button from "../utils/Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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

  return (
    <header className="w-full py-8 px-4 flex bg-white flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full h-auto">
        {/* logo */}
        <div className="mx-3">
          <h1 className=" md:text-xl lg:text-2xl font-bold cursor-pointer">
            <Link to="/">
              <span className="text-secondary">e</span>ventrybe
            </Link>
          </h1>
        </div>

        {/* desktop navbar */}
        <div className="hidden lg:flex text-gray-600 font-thin">
          {menuItems.map((item) => (
            <li
              key={item.link}
              className="font-semibold px-3 cursor-pointer list-none"
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </div>

        {/* deskotp search ctn */}
        <div className="hidden lg:block bg-white p-1 w-[25%] shadow-2xl rounded-lg h-auto my-2">
          <Link to="/SearchApp">
            <i className="text-gray-700 font-bold text-2xl absolute m-2">
              <FiSearch />
            </i>
            <input
              type="text"
              placeholder="Search events ..."
              className="border-none outline-none mx-10 placeholder:text-xs w-[75%] lg:w-[85%] h-10"
            />
          </Link>
        </div>
        {/* login & signin ctn */}
        <div className="flex justify-around items-center lg:w-[18%]">
          <Link to="/SignIn">
            <Button
              text="Login"
              bgColor="transparent"
              textColor="red"
              btnWidth={100}
              btnHeight={40}
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
        <div
          onClick={() => setNav(!nav)}
          className="lg:hidden text-slate-500 cursor-pointer mx-4"
        >
          {!nav ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={30}
              className=""
            />
          )}
        </div>
      </nav>

      {/* mobile search ctn */}
      <div className="lg:hidden border-[1px] border-gray-300 bg-white p-1 w-[85%] md:w-[50%] shadow-2xl rounded-lg h-auto mt-6">
        <i className="text-gray-700 font-bold text-2xl absolute m-2">
          <FiSearch />
        </i>
        <input
          type="text"
          placeholder="Search events ..."
          className="border-none outline-none mx-10 placeholder:text-xs w-[75%] lg:w-[85%] h-10"
        />
      </div>

      {/* mobile nav box */}
      {!nav ? null : (
        <ul className="w-[40%] fixed h-[50vh] bg-slate-300  flex flex-col justify-around items-center mt-[75%] ml-[50%]">
          {menuItems.map((item) => (
            <li
              key={item.link}
              className="cursor-pointer p-4 h-[20%] flex w-full "
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
