// src/components/Card.js
import React from "react";

const Card = ({ name, orders, imageUrl }) => {
  return (
    <div className=" rounded-lg overflow-hidden w-100 flex ">
      <div className="flex items-center p-6">
        <img
          className="h-16 w-16 border-2 border-red-500 rounded-full object-cover"
          src={imageUrl}
          alt={`${name}'s profile`}
        />
        <div className="ml-2">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600 ">{orders}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
