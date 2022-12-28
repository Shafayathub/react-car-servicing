import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceID } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceID]);
  return (
    <div className="mt-10 text-center">
      <h3>Service Details: {service.name}</h3>
      <Link to="/checkout">
        <button className="p-2 bg-blue-500 rounded-md border-2 hover:bg-blue-600 text-white font-medium my-5">
          Proceed Checkout
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
