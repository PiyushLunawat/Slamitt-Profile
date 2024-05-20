import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import Image from "next/image";
import Detail from '../../public/images/detailsIcon.png';
import user from '../../public/images/user.png';
import arrow from '../../public/images/arrow.png';
import round from '../../public/images/round.png';
import CompType from '../../public/images/Competitiontype.png';
import rating from '../../public/images/rating.png';

const HighLight = ({ userData }) => {
  const [competitions, setCompetitions] = useState([]);
  const [hl, setHl] = useState(0);

  useEffect(() => {
    if (userData && userData.competitions) {
      setCompetitions(userData.competitions);
      
      // Calculate total number of rounds
      const total = userData.competitions.reduce((sum, competition) => sum + (competition.highLights ? competition.highLights.length : 0), 0);
      setHl(total);
    }
  }, [userData]);

  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead">
        <Typography.Title level={2}>HighLights ({hl})</Typography.Title>
        <Image src={Detail} alt="Detail" className="ml-[10px] mb-[0.5rem]" />
      </div>

      {competitions.map((competition, competitionIndex) => (
        competition.highLights.map((highlight, highlightIndex) => (
          <div key={`${competitionIndex}-${highlightIndex}`} className="px-10 py-10 mb-5 rounded-2xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)]">
            <div className="flex">
              <div className='flex rounded-full bg-gray-200 gap-2 px-2 py-2 mb-5'>
                <Typography.Text className="flex justify-between items-center text-xs sm::text-l md:text-l lg:text-l font-medium">
                  <Image src={round} alt="Round" className='w-[22px] h-[22px] mr-[5px]' />{highlight.roundName}
                </Typography.Text>
                <Typography.Text className="flex justify-between items-center text-xs sm:text-l md:text-l lg:text-l font-medium">
                  <Image src={round} alt="Competition" className='w-[22px] h-[22px] mr-[5px]' />{competition.competitionName}
                </Typography.Text>
                <Typography.Text className="flex justify-between items-center text-xs sm:text-l md:text-l lg:text-l font-medium">
                  <Image src={CompType} alt="Type" className='w-[11px] h-[11px] mr-[5px]' />{competition.competitionType}
                </Typography.Text>
              </div>
            </div>

            {highlight.feedback.map((fb, fbIndex) => (
              <div key={`${competitionIndex}-${highlightIndex}-${fbIndex}`} className="grid border-b border-gray-300 border-dashed mb-4 pb-5">
                <div className="flex px-4 py-4 mb-2">
                  <div className="flex justify-start">
                    <Image src={user} alt="User" className="h-[64px] w-[64px] rounded-full justify-center text-white items-center" />
                    <Image src={arrow} alt="Arrow" className="w-6 h-6 relative bottom-[-45px] right-[15px]" />
                  </div>
                  <div className="grid text-left">
                    <Typography.Title level={4} className="!mb-[0em]">{fb.author}</Typography.Title>
                    <Typography.Text>{fb.role}</Typography.Text>
                  </div>
                </div>
                <div className="px-5 text-left">
                  <Typography.Text className="text-xl font-medium">
                    {fb.comment}
                  </Typography.Text>
                  <Typography.Text className="flex gap-4 text-gray-500 mt-2">
                    {fb.date}
                    <Typography.Text className="flex font-medium">
                      <Image src={rating} className="mr-1" />{fb.rating}
                    </Typography.Text>
                  </Typography.Text>
                </div>
              </div>
            ))}
          </div>
        ))
      ))}
    </div>
  );
};

export default HighLight;
