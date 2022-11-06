import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from './Expert';

const experts = [
  { id: 1, name: 'Tony Stark', img: expert1 },
  { id: 2, name: 'Abdul Majid', img: expert2 },
  { id: 3, name: 'Hasim Amla', img: expert3 },
  { id: 4, name: 'Stuart Biny', img: expert4 },
  { id: 5, name: 'MS Dhoni', img: expert5 },
  { id: 6, name: 'Will Smith', img: expert6 },
];

const Experts = () => {
  return (
    <div className="m-5">
      <h3 className="text-center font-bold text-4xl text-blue-600">
        Our Experts
      </h3>

      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3 mt-3">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
