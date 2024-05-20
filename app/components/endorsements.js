import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.png';
import user from "../../public/images/user.png"
import endorsmentIcon from "../../public/images/endorsmentIcon.png"
import arrow from "../../public/images/arrow.png"

const Endorsement = ({userData}) => {

  const [endorsement,setEndorsement]=useState([]);

  useEffect(() => {
    if (userData && userData.endorsements) {
      setEndorsement(userData.endorsements);
    }
  }, [userData]);
 
  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead">
        <Typography.Title level={2} >Endorsements</Typography.Title>
        <Image src={Detail} alt="!" className="ml-[10px] mb-[0.5rem]"/>
      </div>
      {endorsement.map((endorsement, index) => (
        <>
        <div className="flex px-4 py-4 mb-2">
        <div className="flex">
          <Image src={user} alt="User" class="h-[64px] w-[64px] rounded-full justify-center text-white items-center"/>
          <Image src={arrow} alt=">" className="w-6 h-6 relative bottom-[-45px] right-[15px]"/>
        </div>
        <div className="grid text-left">
          <Typography.Title level={4} className="!mb-[0em]">{endorsement.name}</Typography.Title>
          <Typography.Text >{endorsement.jobProfile}, {endorsement.companyName}</Typography.Text>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {endorsement.skills.map((sk, index) => (
        <div className='border-2 border-gray-300 rounded-[20px] px-5 py-3 '>
          <Typography.Text className="flex justify-between items-center">
            {sk}<Image src={endorsmentIcon} alt="i" className='ml-[5px]'/>
          </Typography.Text>
        </div>      
      ))}
      </div>

        </>
      ))}
    </div>
  );
};

export default Endorsement;