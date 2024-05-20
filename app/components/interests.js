import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image";
import inIcon from '../../public/images/interestIcon.png'

const Interest = ({ userData }) => {

  const [interests, setInterests] = useState([]);

  useEffect(() => {
    if (userData && userData.interests) {
      setInterests(userData.interests);
    }
  }, [userData]);

    return(
        <div className="h-auto mb-16 pb-16 border-b border-gray-300" >
          <Typography.Title level={3} className="flex items-center"> <Image src={inIcon} className="w-[20px] h-[20px] mr-[5px]"/>Interests</Typography.Title>
          <div className="flex flex-wrap gap-4">
          {interests.map((interests, index) => (
            <div  className='interest-comps border-2 border-gray-300 rounded-full px-5 py-3 '>
              <Typography.Text className="interest-comps flex justify-between items-center">
                {/* <Image src={inIcon} alt="i" className='mr-[5px]'/> */}{interests}
              </Typography.Text>
            </div>
          ))}
          </div>
        </div>
        
    )
};

export default Interest;