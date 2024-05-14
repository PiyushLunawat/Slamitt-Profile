import React from "react";
import { Typography } from "antd";
import Image from "next/image";
import endorsement from '../../public/images/endorsmentIcon.png';
import feedback from '../../public/images/feedbackIcon.png';
import placement from '../../public/images/placementIcon.png';
import topRated from '../../public/images/topratedIcon.png';

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
    <div className="h-auto mb-10" >
      <div className="counter flex justify-between items-center gap-4 px-10 py-3 rounded-2xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)]" >
        {stats.map((stat, index) => (
        <div key={index} className="counter-blocks flex flex-col items-center px-4 py-2  ">
          <div className="flex items-center" >
            <Image src={stat.icon} alt={stat.label} className="mr-2"/>
            <Typography.Title level={2} className="mt-2 mb-0">{stat.count}</Typography.Title>
          </div>
          <Typography.Text className="sm:text-l text-[1.1rem]">{stat.label}</Typography.Text>
        </div>
        ))}
      </div>  
    </div>
  );
};

export default Counter;
