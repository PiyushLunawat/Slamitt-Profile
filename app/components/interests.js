import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image";
import inIcon from '../../public/images/interestIcon.svg';
import inItem from '../../public/images/interestItem.svg';

const Interest = ({ userData }) => {

  const [interests, setInterests] = useState([]);

  useEffect(() => {
    if (userData && userData.interests) {
      setInterests(userData.interests);
    }
  }, [userData]);

    return(
        <div className="h-auto mb-16 pb-6 border-b border-gray-200" >
          <h1 className="flex items-center text-[18px] font-extrabold ml-2 mb-6"> <Image src={inIcon} className="w-[20px] h-[20px] mr-[5px]"/>My Interests</h1>
          <div className="flex flex-wrap gap-4">
          {interests.map((interests, index) => (
            <div  className='interest-comps border border-gray-300 rounded-full px-5 py-3'>
              <h5 className="interest-comps flex justify-between items-center text-[18px] font-medium gap-2">
                 <Image src={inItem} alt="i" className='mr-[5px]'/>{interests}
              </h5>
            </div>
          ))}
          </div>
        </div>
        
    )
};

export default Interest;