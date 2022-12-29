import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="mt-5 text-center">
      <h2>Manage Service Dashboard</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3 className="m-3">
            {service.name}{' '}
            <button
              className="border p-1 text-red-600"
              onClick={() => handleDelete(service._id)}>
              X
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
