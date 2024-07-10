import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
 import image from "./images/Mosque.png";
 import Card from "../Admin/Card";
import Footer from "../footers/Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import AdminDashboard from './AdminDashboard';
import { IoIosArrowBack } from "react-icons/io";
import SignedNav from '../accounts/Signed Users Navbar/SignedNav';

const Tickets = () => {
    const customers = [
      {
        id: 1,
        name: "John Doe",
        orders: 10,
        amount: "$500",
        paymentStatus: "Paid",
        date: "2024-07-01",
      },
      {
        id: 2,
        name: "Jane Smith",
        orders: 15,
        amount: "$800",
        paymentStatus: "Pending",
        date: "2024-07-02",
      },
      {
        id: 3,
        name: "Mike Johnson",
        orders: 8,
        amount: "$300",
        paymentStatus: "Paid",
        date: "2024-07-03",
      },
    ];
  return (
    <div className="">
      <SignedNav/>
      <div className="py-5 ">
        <Link to="/">
          <div className=" p-4 flex flex-row ">
            {/* Back Arrow */}
            <IoIosArrowBack  className=" cursor-pointer font-bold text-black text-2xl" />
            <p className="text-[0.9em] text-secondary">Back</p>
          </div>
        </Link>
      </div>

      {/* user details */}
      <div className="container mx-auto p-4 px-[10vw] ">
        <Card name="Torhemen Sena" orders="3 Orders" imageUrl={image} />
      </div>

      {/*  search ctn */}
      <div className="flex justify-center items-center flex-col">
        <div className="  bg-white p-1 w-[55%] shadow-2xl rounded-lg border-[1px] border-gray-700 h-auto my-2">
          <Link to="/SearchApp">
            <i className="text-gray-700 font-bold text-2xl absolute m-2">
              <FiSearch />
            </i>
            <input
              type="text"
              placeholder="Search Orders..."
              className="border-none outline-none mx-10 placeholder:text-xs w-[75%] lg:w-[85%] h-10"
            />
          </Link>
        </div>
      </div>

      {/* DASHBOARD */}
      <div>
        <AdminDashboard />
      </div>
      <Footer />
    </div>
  );
};

export default Tickets
