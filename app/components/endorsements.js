import React from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.png';
import user from "../../public/images/user.png"
import endorsmentIcon from "../../public/images/endorsmentIcon.png"
import arrow from "../../public/images/arrow.png"

const Endorsement = () => {
 
  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead">
        <Typography.Title level={2} >Endorsements</Typography.Title>
        <Image src={Detail} alt="!" className="ml-[10px] mb-[0.5rem]"/>
      </div>


      <div className="flex px-4 py-4 mb-2">
        <div className="flex">
          <Image src={user} alt="User" class="h-[64px] w-[64px] rounded-full justify-center text-white items-center"/>
          <Image src={arrow} alt=">" className="w-6 h-6 relative bottom-[-45px] right-[15px]"/>
        </div>
        <div className="grid text-left">
          <Typography.Title level={4} className="!mb-[0em]">Judge's Name</Typography.Title>
          <Typography.Text >Job profile at State, Country</Typography.Text>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <div className='border-2 border-gray-300 rounded-[20px] px-5 py-3 '>
          <Typography.Text className="flex justify-between items-center">
            Communication<Image src={endorsmentIcon} alt="i" className='ml-[5px]'/>
          </Typography.Text>
        </div>
        <div className='border-2 border-gray-300 rounded-[20px] px-5 py-3 '>
          <Typography.Text className="flex justify-between items-center">
            Negotiation<Image src={endorsmentIcon} alt="i" className='ml-[5px]'/>
          </Typography.Text>
        </div>        
      </div>
    </div>
  );
};

export default Endorsement;