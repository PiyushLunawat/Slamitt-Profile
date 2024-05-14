import React from "react";
import { Typography } from "antd";
import Image from "next/image";
import exIcon from '../../public/images/experienceIcon.png'

const Experience = () => {
    return(
        <div className="hidden sm:block md:block lg:block h-auto mb-10" >
          <Typography.Title level={3} className="flex items-center"> <Image src={exIcon} className="w-[20px] h-[20px] mr-[5px]"/>Experiences</Typography.Title>
          <div className="flex flex-wrap gap-4">
            <div className="flex w-1/2 border-2 border-gray-300 rounded-[16px] px-4 py-4 mb-2" style={{ width: 'calc(50% - 1rem)' }}>
              <div class="h-[64px] w-[64px] rounded-full bg-red-600 mr-5 flex justify-center text-white items-center font-bold text-2xl">BM</div>
              <div className="grid text-left">
                <Typography.Title level={4} className="!mb-[0em]">Content Creator</Typography.Title>
                <Typography.Text ><b>Bridge Media.</b> Banglore, India</Typography.Text>
                <Typography.Text>Feb 2024 - Present</Typography.Text>
              </div>
              </div>
              <div className="flex w-1/2 border-2 border-gray-300 rounded-[16px] px-4 py-4 mb-2" style={{ width: 'calc(50% - 1rem)' }}>
              <div class="h-[64px] w-[64px] rounded-full bg-red-600 mr-5 flex justify-center text-white items-center font-bold text-2xl">BM</div>
              <div className="grid text-left">
                <Typography.Title level={4} className="!mb-[0em]">Content Creator</Typography.Title>
                <Typography.Text ><b>Bridge Media.</b> Banglore, India</Typography.Text>
                <Typography.Text>Feb 2024 - Present</Typography.Text>
              </div>
            </div>
            <div className="flex w-1/2 border-2 border-gray-300 rounded-[16px] px-4 py-4 mb-2" style={{ width: 'calc(50% - 1rem)' }}>
              <div class="h-[64px] w-[64px] rounded-full bg-red-600 mr-5 flex justify-center text-white items-center font-bold text-2xl">BM</div>
              <div className="grid text-left">
                <Typography.Title level={4} className="!mb-[0em]">Content Creator</Typography.Title>
                <Typography.Text ><b>Bridge Media.</b> Banglore, India</Typography.Text>
                <Typography.Text>Feb 2024 - Present</Typography.Text>
              </div>
            </div>
            <div className="flex w-1/2 border-2 border-gray-300 rounded-[16px] px-4 py-4 mb-2" style={{ width: 'calc(50% - 1rem)' }}>
              <div class="h-[64px] w-[64px] rounded-full bg-red-600 mr-5 flex justify-center text-white items-center font-bold text-2xl">BM</div>
              <div className="grid text-left">
                <Typography.Title level={4} className="!mb-[0em]">Content Creator</Typography.Title>
                <Typography.Text ><b>Bridge Media.</b> Banglore, India</Typography.Text>
                <Typography.Text>Feb 2024 - Present</Typography.Text>
              </div>
            </div>
          </div>
        </div>
        
    )
};

export default Experience;