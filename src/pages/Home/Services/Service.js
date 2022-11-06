import React from 'react';

const service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div className="border rounded-lg p-3">
      <img className="w-full" src={img} alt="" />

      <h3 className="text-xl font-semibold">{name}</h3>
      <h3 className="text-lg font-semibold"> price:${price}</h3>
      <p className="my-2">{description}</p>
      <button className="p-2 bg-blue-500 rounded-md border-2 hover:bg-blue-600 text-white font-medium">
        Get Service
      </button>
    </div>
  );
};

export default service;
