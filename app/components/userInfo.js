import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image";
import Hat from '../../public/images/instituteIcon.png'

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
          <div className='mobile-info flex items-center gap-5 w-full mb-5'>
            <Typography.Title level={3} >{fname} {lname}</Typography.Title>
            <div className='mobile-college border-2 border-gray-300 rounded-full px-5 py-3 mb-2 '>
              <Typography.Text className="flex justify-between items-center">
                <Image src={Hat} alt="Hat" className='mr-[5px]'/>{cname}, {ccity}
              </Typography.Text>
            </div>
          </div>
          <Typography.Text className="text-[1.2rem] " >
            {description}
          </Typography.Text>
        </div>
        
    )
};

export default UserInfo;