import React from 'react';

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="border rounded-lg p-3 justify-center drop-shadow-xl">
      <img className="w-full mb-3 rounded-lg" src={img} alt="" />
      <h3 className="text-xl font-semibold text-center">{name}</h3>
    </div>
  );
};

export default Expert;
