import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceID } = useParams();
  return (
    <div>
      <h3>Service Details: {serviceID}</h3>
    </div>
  );
};

export default ServiceDetail;
