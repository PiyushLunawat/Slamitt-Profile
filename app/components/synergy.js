import React, { useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.png';
import user from '../../public/images/user.png'
import endorsmentIcon from "../../public/images/endorsmentIcon.png"
import round from "../../public/images/round.png"

const Synergy = (userData) => {

  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead">
        <Typography.Title level={2} >Synergy</Typography.Title>
        <Image src={Detail} alt="!" className="ml-[10px] mb-[0.5rem]"/>
      </div>

      <div className="grid my-4">
        <div className="flex gap-1">
          <Image src={user} alt="profile" className="h-[64px] w-[64px]"></Image>
          <Image src={user} alt="profile" className="h-[64px] w-[64px]"></Image>
          <Image src={user} alt="profile" className="h-[64px] w-[64px]"></Image>
        </div>
        <div className="grid text-left mx-2">
          <div className="flex gap-1">
          <Typography.Text className="text-xl font-medium">User Name</Typography.Text>
          <Typography.Text className="text-xl font-medium">User Name</Typography.Text>
          <Typography.Text className="text-xl font-medium">User Name</Typography.Text>
          </div>
          <Typography.Text className="text-gray-500">Synergise well in these skills</Typography.Text>
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

      <div className="">
        <div className="flex items-center mt-5">
          <Typography.Text className="text-xl font-medium text-gray-500">As seen during</Typography.Text>
          <Typography.Text className="text-xl font-medium mx-2">Competition</Typography.Text>
          <Typography.Text className="text-gray-500">| Type</Typography.Text>
        </div>
        <div className="flex items-center my-5">
          <Image src={round} alt=">" className=""/>
          <div className="grid text-left mx-2">
          <Typography.Text className="text-xl font-medium">Round Name</Typography.Text>
          <Typography.Text className="text-gray-500">01 May, 2024</Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Synergy;