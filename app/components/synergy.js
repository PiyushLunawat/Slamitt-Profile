import React, { useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.svg';
import user from '../../public/images/user.svg'
import endorsmentIcon from "../../public/images/endorsmentIcon.svg"
import round from "../../public/images/round.png";
import teamlogo from '../../public/images/teamlogo.svg';

const Synergy = ({userData}) => {

  const [competitions, setCompetitions] = useState([]);
  const [syn, setSyn] = useState(0);

  useEffect(() => {
    if (userData && userData.competitions) {
      setCompetitions(userData.competitions);

      const total = userData.competitions.reduce((sum, competition) => 
        sum + (competition.highLights ? competition.highLights.reduce((innerSum, highlight) => innerSum + (highlight.endorsements ? highlight.endorsements.length : 0), 0) : 0), 
      0);
      setSyn(total);
    }
  }, [userData]);

  return (
    <div className="w-full ">
      <div className="hide profileSidebarHead">
      <h1 className="text-[30px] font-semibold pl-2">Synergy ({syn})</h1>
        <Image src={Detail} alt="!" className="ml-[10px] cursor-pointer"/>
      </div>

    {competitions.map((competition, competitionIndex) => (
      competition.highLights.map((highlight, highlightIndex) => (
      <>
      <div className="grid my-4 ">
        <div className="flex gap-1 pl-[25px]">
        {competition.teamMembers.map((tm, tmIndex) => (
          <Image src={user} alt="profile" className="h-[74px] w-[74px] ml-[-25px]"></Image>      
        ))}
        </div>
        <div className="grid text-left mx-2">
          <div className="flex gap-1">
          {competition.teamMembers.map((tm, tmIndex) => (
            <h5 className="text-[16px] font-semibold">{tm}</h5>
          ))}
          </div>
          <h5 className="text-[16px] text-gray-500">Synergise well in these skills</h5>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
      {highlight.endorsements.map((end, endIndex) => (
        <div className='border-2 border-gray-300 rounded-[20px] px-5 py-3 '>
          <h5 className="flex justify-between items-center text-[14px] font-semibold">
            {end}<Image src={endorsmentIcon} alt="i" className='w-[17px] ml-[5px]'/>
          </h5>
        </div>      
        ))}
      </div>

      <div className="">
        <div className="flex items-center mt-5 pl-2">
          <h5 className="text-[16px] font-semibold text-gray-500">As seen during</h5>
          <h5 className="text-[16px] font-semibold mx-2">{competition.competitionName}</h5>
          <h5 className="text-[12px] text-gray-500">|  {competition.competitionType}</h5>
        </div>
        <div className="flex items-center my-5 border-b border-gray-300 pb-6 mb-6">
          <Image src={round} alt=">" className=""/>
          <div className="grid text-left mx-2">
          <h5 className="text-[16px] font-semibold">{highlight.roundName}</h5>
          <h5 className="text-[12px] text-gray-500">01 May, 2024</h5>
          </div>
        </div>
      </div>
      </>
      ))
    ))}
    <div className="relative bg-white h-[3px] top-[-25px] z-10"></div>
    </div>
  );
};

export default Synergy;