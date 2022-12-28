import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="border rounded-lg p-3">
      <img className="w-full rounded-lg" src={img} alt="" />

      <h3 className="text-xl font-semibold">{name}</h3>
      <h3 className="text-lg font-semibold"> price:${price}</h3>
      <p className="my-2">{description}</p>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className="p-2 bg-blue-500 rounded-md border-2 hover:bg-blue-600 text-white font-medium">
        Get Service
      </button>
    </div>
  );
};

export default Service;
