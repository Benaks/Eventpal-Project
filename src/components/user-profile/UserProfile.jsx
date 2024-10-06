import React from "react";
import Logout from "../auth/Logout";

export const UserProfile = () => {
  // Sample user data
  const userData = {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phoneNumber: "+1 987 654 3210",
    location: "Los Angeles, CA, USA",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>

      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-6 transition-transform transform hover:scale-105">
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/150" // Placeholder image
            alt="User"
            className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-600"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {userData.name}
          </h2>
        </div>

        <div className="space-y-2">
          <div>
            <span className="font-medium text-gray-600">Email:</span>{" "}
            {userData.email}
          </div>
          <div>
            <span className="font-medium text-gray-600">Phone Number:</span>{" "}
            {userData.phoneNumber}
          </div>
          <div>
            <span className="font-medium text-gray-600">Location:</span>{" "}
            {userData.location}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Logout />
      </div>
    </div>
  );
};
