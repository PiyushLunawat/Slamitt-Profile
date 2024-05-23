import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.svg';
import user from "../../public/images/user.svg"
import endorsmentIcon from "../../public/images/endorsmentIcon.svg"
import arrow from "../../public/images/arrow.svg"

const Endorsement = ({userData}) => {

  const [endorsement,setEndorsement]=useState([]);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (userData && userData.endorsements) {
      setEndorsement(userData.endorsements);

      const total = userData.endorsements.reduce((sum, endorsement) => sum + (endorsement.skills ? endorsement.skills.length : 0), 0);
      setEnd(total);
    }

  }, [userData]);
 
  return (
    <div className="w-full border-b border-gray-300 pb-6 mb-10">
      <div className="hide profileSidebarHead">
      <h1 className="text-[30px] font-semibold pl-2">Endorsements ({end})</h1>
        <Image src={Detail} alt="!" className="ml-[10px] cursor-pointer"/>
      </div>
      {endorsement.map((endorsement, index) => (
        <>
        <div className="flex py-4 mb-2 ">
        <div className="flex justify-start">
          <Image src={user} alt="User" className="h-[64px] w-[64px] rounded-full justify-center text-white items-center" /> {/* border-b border-gray-300 border-dashed mb-4 pb-5 */}
          <Image src={arrow} alt="Arrow" className="w-6 h-6 relative bottom-[-40px] right-[20px]" />
        </div>
        <div className="grid text-left">
          <h5 className="text-[16px] flex items-center font-semibold pt-2 gap-1">{endorsement.name}</h5>
          <h5 className="text-[12px] font-medium">{endorsement.jobProfile}, {endorsement.companyName}</h5>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 border-b border-gray-300 border-dashed pb-5">
        {endorsement.skills.map((sk, index) => (
        <div className='border-2 border-gray-300 rounded-[20px] px-5 py-3 '>
          <h5 className="flex justify-between items-center text-[14px] font-semibold">
            {sk}<Image src={endorsmentIcon} alt="i" className='w-[17px] ml-[5px]'/>
          </h5>
        </div>      
         ))}
      </div>

        </>
      ))}
      <div className="relative bg-white h-[3px] top-[-2px] z-10"></div>
    </div>
  );
};

export default Endorsement;