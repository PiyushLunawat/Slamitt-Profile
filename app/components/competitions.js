import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.png';
import teamlogo from '../../public/images/team.png';
import endorsmentIcon from '../../public/images/endorsmentIcon.png';
import feedbackIcon from '../../public/images/feedbackIcon.png';
import teams from '../../public/images/teams.png';
import rounds from '../../public/images/rounds.png';
import judges from '../../public/images/judges.png';

const Competition = ({userData}) => {

  const [competition,setCompetition]=useState([]);

  useEffect(() => {
    if (userData && userData.competitions) {
      setCompetition(userData.competitions);
    }
  }, [userData]);

  // console.log{competition};
  
  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead">
        <Typography.Title level={2} >Competitions</Typography.Title>
        <Image src={Detail} alt="!" className="ml-[10px] mb-[0.5rem]"/>
      </div>
      {competition.map((competition, index) => (
      <div className="mobile-compcard lg:flex md:flex sm:grid rounded-2xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)] mb-5">
         <div className="md:w-[25%] lg:w-[25%] flex items-center justify-center bg-red-600 rounded-tl-2xl rounded-bl-2xl px-5">
            <div className='bg-white w-auto rounded-full px-5 py-3 '>
              <Typography.Text className="flex justify-center leading-none items-center">
                <Image src={teamlogo} alt="i" className='mr-[5px]'/>{competition.teamName}
              </Typography.Text>
            </div>
         </div>

         <div className="grid text-left pt-10 pb-5 w-full">
            <div className="mob-card pl-20">
            <Typography.Title level={2}>{competition.competitionName}</Typography.Title>
            <Typography.Text className="mb-4 text-[1.1rem] font-medium  text-gray-400">{competition.duration}</Typography.Text>
              <div className="flex gap-4 pt-5">
              <div className='border-2 border-gray-300 rounded-full px-5 py-2'>
                <Typography.Text className="mob-font flex justify-between items-center font-medium text-gray-500">
                  {/* <Image src={inIcon} alt="i" className='mr-[5px]'/> */}{competition.competitionType}
                </Typography.Text>
              </div>
              <div className='border-2 border-gray-300 rounded-full px-5 py-2'>
                <Typography.Text className="mob-font flex justify-between items-center font-medium text-gray-400">
                  <Image src={endorsmentIcon} alt="i" className='mr-[5px]'/>X
                </Typography.Text>
              </div>
              <div className='border-2 border-gray-300 rounded-full px-5 py-2'>
                <Typography.Text className="mob-font flex justify-between items-center font-medium text-gray-400">
                  <Image src={feedbackIcon} alt="i" className='mr-[5px]'/>X
                </Typography.Text>
              </div>
            </div>
            </div>

            <hr class="border-b border-gray-300 my-5"></hr>

            <div className="mob-card flex justify-between items-center md:text-l lg:-text-l md:px-20 lg:px-20">
                <Typography.Text className="mob-font flex justify-between items-center font-medium text-gray-400">
                  <Image src={teams} alt="i" className='mr-[5px]'/>{competition.numberOfParticipants} Teams
                </Typography.Text>
                <Typography.Text className="mob-font flex justify-between items-center font-medium text-gray-400">
                  <Image src={rounds} alt="i" className='mr-[5px]'/>{competition.numberOfRounds} Rounds
                </Typography.Text>
                <Typography.Text className="mob-font flex justify-between items-center font-medium text-gray-400">
                  <Image src={judges} alt="i" className='mr-[5px]'/>{competition.numberOfJudges} Judges
                </Typography.Text>
            </div>
         </div>
      </div>
    ))}
    </div>
  );
};

export default Competition;