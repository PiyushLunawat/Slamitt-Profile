import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image";
import exIcon from '../../public/images/experienceIcon.svg';
import expIcon from '../../public/images/exp.png';

const Experience = ({ userData }) => {

  const [placement,setPlacement]=useState([]);

  useEffect(() => {
    if (userData && userData.experiences) {
      setPlacement(userData.experiences);
    }
  }, [userData]);

  // console.log(placement);

    return(
        <div className="sm:block md:block lg:block h-auto mb-7" >
          <h1 className="flex items-center text-[18px] font-bold ml-2 mb-4"> <Image src={exIcon} className="w-[20px] h-[20px] mr-[5px]"/>Experiences</h1>
          <div className="flex flex-wrap gap-3 pr-4">
          {placement.map((placement, index) => (
            <div className="flex exp-card border border-gray-300 rounded-[16px] px-4 py-4 mb-2 cursor-pointer" >
              <Image src={expIcon} alt="" class="h-[64px] w-[64px] rounded-full bg-red-600 mr-5"/>
              <div className="grid text-left">
                <h1 className="text-[16px] font-bold !mb-[0em]">{placement.jobProfile}</h1>
                <h5 className="text-[12px]"><b>{placement.companyName}.</b> {placement.city}, {placement.country}</h5>
                <h5 className="text-[12px]">{placement.duration}</h5>
              </div>
              </div>
          ))}
          </div>
        </div>
        
    )
};

export default Experience;