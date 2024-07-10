// src/components/AdminDashboard.js
import React from "react";

const AdminDashboard = () => {
  // Example data for customers
  const customers = [
    { id: 1, name: "Joseph Akpan", orders: 10, price: "$50", payment: "Paid", email:'joe2gmail.com' },
    { id: 2, name: "Solomon Daniel", orders: 15, price: "$80", payment: "Pending", email:'solomon@2gmail.com' },
    { id: 3, name: "Simeon Triumph", orders: 8, price: "$30", payment: "Paid",  email:'simeon@2gmail.com'},
  ];

  return (
    <div className="container mx-auto p-4 py-10">
      <div className="overflow-x-auto">
        <table className="min-w-full  shadow-md rounded-lg overflow-hidden flex flex-col">
          <thead className="bg-white text-gray-600  my-4 shadow-lg  ">
            <tr className=" grid grid-cols-4 grid-rows-1 ">
              <th className="py-8 px-4 flex justify-start">Name</th>
              <th className="py-8 flex justify-start px-4">Orders</th>
              <th className="py-8 px-4 flex justify-start">Price</th>
              <th className="py-8 px-4 flex justify-start">Payment</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 flex flex-col gap-1">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className=" shadow-lg rounded-lg bg-white grid grid-rows-1 grid-cols-4 "
              >
                <td className=" py-8 px-4 flex flex-col ">
                  <p>{customer.name}</p>
                  <p className="text-[0.65em]">{customer.email}</p>
                </td>
                
                <td className=" py-8 px-4">{customer.orders}
                 <p className="text-[0.65em]"></p>
                 </td>
                <td className=" py-8 px-4 text-green-500">{customer.price}</td>
                <td className=" py-8 px-4">{customer.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
