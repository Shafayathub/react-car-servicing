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
    <div className="m-10 md:m-20 lg:m-30 grid grid-cols-1 lg:grid-cols-3">
      <div className="p-5 border rounded-lg flex justify-center items-center lg: col-start-2 text-center">
        <div>
          <img className="rounded-lg mx-auto" src={service.img} alt="" />
          <div>
            <h3>Service Details: {service.name}</h3>

            <h3 className="text-lg font-semibold"> price:${service.price}</h3>
            <p className="my-2 text-justify">{service.description}</p>
          </div>
          <Link to="/checkout">
            <button className="p-2 bg-blue-500 rounded-md border-2 hover:bg-blue-600 text-white font-medium">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
