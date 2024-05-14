import React from "react";
import { Typography } from "antd";
import Image from "next/image";
import Hat from '../../public/images/instituteIcon.png'

const UserInfo = ({ userData }) => {

  if (!userData) {
    return <p>Loading...</p>; // or some other placeholder content
  }

  const name=userData.firstName;
  console.log(name);

    return(
        <div className="h-auto text-left mb-10" >
          <div className='mobile-info flex items-center gap-5 w-full mb-5'>
            <Typography.Title level={3} >{name}</Typography.Title>
            <div className='mobile-college border-2 border-gray-300 rounded-full px-5 py-3 mb-2 '>
              <Typography.Text className="flex justify-between items-center">
                <Image src={Hat} alt="Hat" className='mr-[5px]'/> Symbiosis, Pune
              </Typography.Text>
            </div>
          </div>
          <Typography.Text className="text-[1.2rem] " >
            A proactive student passionate about entrepreneurship & innovation. I'm a problem solver with a talent for generating innovative ideas, & I enjoy working collaboratively with others towards common goals. My strengths include strong communication skills, a willingness to learn from others, & a commitment to success.
          </Typography.Text>
        </div>
        
    )
};

export default UserInfo;