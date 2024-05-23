import React from "react";
import { Typography } from "antd";
import Image from "next/image";
import endorsement from '../../public/images/endorsmentIcon.svg';
import feedback from '../../public/images/feedbackIcon.svg';
import placement from '../../public/images/placementIcon.svg';
import topRated from '../../public/images/topratedIcon.svg';

const Counter = () => {
  const stats = [
    {
      icon: endorsement,  
      count: 22,
      label: 'Endorsements'
    },
    {
      icon: feedback,
      count: 12,
      label: 'Feedbacks'
    },
    {
      icon: placement,
      count: 4,
      label: 'Placements'
    },
    {
      icon: topRated,
      count: 28,
      label: 'Top Rated'
    }
  ];

  return (
    <div className="h-auto mb-16" >
      <div className="counter flex justify-between items-center gap-4 px-16 py-7 rounded-2xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)]" >
        {stats.map((stat, index) => (
        <div key={index} className="counter-blocks flex flex-col items-center px-4 py-2  ">
          <div className="flex items-center " >
            <Image src={stat.icon} alt={stat.label} className="mr-2"/>
            <h1 className="text-[32px] font-semibold">{stat.count}</h1>
          </div>
          <h5 className="sm:text-[16px] text-[1.1rem] font-medium">{stat.label}</h5>
        </div>
        ))}
      </div>  
    </div>
  );
};

export default Counter;
