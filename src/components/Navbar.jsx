import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    {
      text: "Local Events",
      link: "/",
    },
    {
      text: "Create events",
      link: "/create",
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
    <div className="text-black justify-between flex items-center py-4 h-[10vh] md:h-[20vh] w-full mx-auto font-poppins px-10 md:px-40">
      <h1 className=" text-2xl font-bold cursor-pointer sh">
        <Link to="/">
          <span className="text-secondary">e</span>ventrybe
        </Link>
      </h1>

      {/* desktop menubar */}
      <ul className="hidden md:flex text-gray-500  font-thin">
        {menuItems.map((item) => (
          <li key={item.link} className="px-3 cursor-pointer">
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <Link to="/SearchApp">
        <div className=" border-[0.2em] border-gray-500 focus:outline-none text-[1em] px-8 py-2 md:w-[25em]  rounded-[1em] h-12 placeholder:text-[0.7em]">
          <svg
            className="w-4 h-4 text-black mt-2 "
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
          <p>Search events</p>
        </div>
      </Link>

      <Link to="/SignIn">
        <button className="p-2 text-red-500 font-bold ">Login</button>
      </Link>

      <Link to="/SignUp">
        <button className="px-4 py-2 shadow-lg font-bold bg-secondary text-[white] text-[1em] rounded-full text-bold">
          sign up
        </button>
      </Link>

      {/* mobile menu bar */}
      <div
        onClick={() => setNav(!nav)}
        className=" text-slate-500 cursor-pointer block hidden"
      >
        {!nav ? (
          <AiOutlineMenu size={30} />
        ) : (
          <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="" />
        )}
        <ul
          className={
            !nav
              ? "hidden"
              : "  w-[100%] fixed h-[30vh] bg-slate-300  flex flex-col justify-around items-center my-10 -ml-[92%]"
          }
        >
          {menuItems.map((item) => (
            <li
              key={item.link}
              className="px-3 cursor-pointer bg-slate-100 p-4 h-[20%] flex border-2 w-full "
            >
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
