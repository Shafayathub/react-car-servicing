import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="p-3">
      <h2 className="text-center font-bold text-4xl text-blue-600">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
