import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image";
import exIcon from '../../public/images/experienceIcon.png'

const Experience = ({ userData }) => {

  const [placement,setPlacement]=useState([]);

  useEffect(() => {
    if (userData && userData.experiences) {
      setPlacement(userData.experiences);
    }
  }, [userData]);

  // console.log(placement);

    return(
        <div className="hidden sm:block md:block lg:block h-auto mb-10" >
          <Typography.Title level={3} className="flex items-center"> <Image src={exIcon} className="w-[20px] h-[20px] mr-[5px]"/>Experiences</Typography.Title>
          <div className="flex flex-wrap gap-4">
          {placement.map((placement, index) => (
            <div className="flex w-1/2 border-2 border-gray-300 rounded-[16px] px-4 py-4 mb-2" style={{ width: 'calc(50% - 1rem)' }}>
              <div class="h-[64px] w-[64px] rounded-full bg-red-600 mr-5 flex justify-center text-white items-center font-bold text-2xl">BM</div>
              <div className="grid text-left">
                <Typography.Title level={4} className="!mb-[0em]">{placement.jobProfile}</Typography.Title>
                <Typography.Text ><b>{placement.companyName}</b> {placement.city}, {placement.country}</Typography.Text>
                <Typography.Text>{placement.duration}</Typography.Text>
              </div>
              </div>
          ))}
          </div>
        </div>
        
    )
};

export default Experience;