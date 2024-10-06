import React from "react";
import Logout from "../auth/Logout";

export const OrganizerProfile = () => {
  // Sample organizer data
  const organizerData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+1 234 567 8900",
    website: "https://johndoedesigns.com",
    address: "123 Main St, Suite 4B",
    city: "Springfield",
    country: "USA",
    accountDetails: "Account number: 0634567289",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Organizer Profile</h1>

      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-6 transition-transform transform hover:scale-105">
        <div className="text-center mb-4">
          <img
            src="https://via.placeholder.com/150" // Placeholder image
            alt="Organizer"
            className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-purple-600"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            {organizerData.name}
          </h2>
        </div>

        <div className="space-y-2">
          <div>
            <span className="font-medium text-gray-600">Email:</span>{" "}
            {organizerData.email}
          </div>
          <div>
            <span className="font-medium text-gray-600">Phone Number:</span>{" "}
            {organizerData.phoneNumber}
          </div>
          <div>
            <span className="font-medium text-gray-600">Website:</span>
            <a
              href={organizerData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              {organizerData.website}
            </a>
          </div>
          <div>
            <span className="font-medium text-gray-600">Address:</span>{" "}
            {organizerData.address}, {organizerData.city},{" "}
            {organizerData.country}
          </div>
          <div>
            <span className="font-medium text-gray-600">Account Details:</span>{" "}
            {organizerData.accountDetails}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Logout />
      </div>
    </div>
  );
};
