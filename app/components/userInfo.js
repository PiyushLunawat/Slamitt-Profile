import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image";
import Hat from '../../public/images/instituteIcon.svg'

const UserInfo = ({ userData }) => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [cname, setCname] = useState('');
  const [ccity, setCcity] = useState('');
  const [description, setDescription] = useState('');

  // Update state variables when userData changes
  useEffect(() => {
    if (userData) {
      setFname(userData.firstName);
      setLname(userData.lastName);
      setCname(userData.college.name);
      setCcity(userData.college.city);
      setDescription(userData.description);
    }
  }, [userData]);

    return(
        <div className="h-auto text-left mb-10" >
          <div className='mobile-info flex items-center gap-5 w-full mb-6'>
            <h1 className="text-[24px] font-semibold">{fname} {lname}</h1>
            <div className='shadow-[0_0px_16px_rgba(0,0,0,0.16)] rounded-full px-3 sm:px-5 py-1 sm:py-2 mb-2 '>
              <h5 className="flex justify-between items-center text-[12px] font-medium leading-7">
                <Image src={Hat} alt="Hat" className='sm:mr-2'/>{cname}
              </h5>
            </div>
          </div>
          <h5 className="text-[12px] sm:text-[18px]" >
            {description}
          </h5>
        </div>
        
    )
};

export default UserInfo;