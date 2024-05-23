import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import Image from "next/image";
import Detail from '../../public/images/detailsIcon.svg';
import user from '../../public/images/user.svg';
import arrow from '../../public/images/arrow.svg';
import round from '../../public/images/round.svg';
import CompType from '../../public/images/Competitiontype.svg';
import rating from '../../public/images/rating.svg';
import hrline from '../../public/images/hr.svg';
import verifi from '../../public/images/verificationicon.svg';

const HighLight = ({ userData }) => {

  const [selectedComp, setSelectedComp] = useState("Task");
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
    <div className="w-full mb-16">
      <div className="hide profileSidebarHead pb-10">
      <h1 className="text-[32px] font-semibold pl-4">Highlights ({hl})</h1>
        <Image src={Detail} alt="Detail" className="ml-[10px] cursor-pointer"/>
      </div>

      {competitions.map((competition, competitionIndex) => (
        competition.highLights.map((highlight, highlightIndex) => (
          <div key={`${competitionIndex}-${highlightIndex}`} className="px-4 sm:px-10 py-10 mb-5 rounded-2xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)]">
          <div className="border-b border-gray-300 pb-6 mb-4">
            <div className="flex gap-4 mb-4">
              <div onClick={() => setSelectedComp("Task")} className={selectedComp === "Task" ? "selected-comp" : "comps"}>Task</div>
              {/* <div onClick={() => setSelectedComp("Media")} className={selectedComp === "Media" ? "selected-comp" : "comps"}>Media</div>
              <div onClick={() => setSelectedComp("Submission")} className={selectedComp === "Submission" ? "selected-comp" : "comps"}>Submission</div> */}
            </div>
              {selectedComp === "Task" && 
              (<div className="text-[14px] text-start">{competition.task}</div>)
              }
            <div className="text-[13px] font-bold text-start cursor-pointer mt-3">View Entire Task</div>  
          </div>
            <div className="flex">
              <div className='flex rounded-full bg-gray-100 gap-2 px-2 py-2 mb-5'>
                <h5 className="text-[13px] font-semibold flex justify-between items-center font-medium">
                  <Image src={round} alt="Round" className='w-[22px] h-[22px] mr-[5px]' />{highlight.roundName}
                </h5>
                <Image src={hrline} alt="|" className=""/>
                <h5 className="text-[13px] font-semibold flex justify-between items-center  font-medium">
                  <Image src={round} alt="Competition" className='w-[22px] h-[22px] mr-[5px]' />{competition.competitionName}
                </h5>
                <Image src={hrline} alt="|" className=""/>
                <h5 className="text-[13px]  flex justify-between items-center text-gray-500 font-medium">
                  <Image src={CompType} alt="Type" className=' mr-[5px]' />{competition.competitionType}
                </h5>
              </div>
            </div>

            {highlight.feedback.map((fb, fbIndex) => (
              <div key={`${competitionIndex}-${highlightIndex}-${fbIndex}`} className="grid ">
                <div className="flex px-4 py-2 mb-2">
                  <div className="flex justify-start">
                    <Image src={user} alt="User" className="h-[64px] w-[64px] rounded-full justify-center text-white items-center" /> {/* border-b border-gray-300 border-dashed mb-4 pb-5 */}
                    <Image src={arrow} alt="Arrow" className="w-6 h-6 relative bottom-[-40px] right-[20px]" />
                  </div>
                  <div className="grid text-left">
                    <h5 className="text-[16px] flex items-center font-semibold pt-2 gap-1">
                      <Image src={verifi} alt="check"/>
                      {fb.author}</h5>
                    <h5 className="text-[12px] font-medium">{fb.role}</h5>
                  </div>
                </div>
                <div className="px-5 text-left">
                  <h5 className="text-[16px] font-semibold">
                    {fb.comment}
                  </h5>
                  <h5 className="text-[12px] flex gap-4 text-gray-500 mt-2">
                    {fb.date}
                    <h5 className="text-[12px] flex text-black font-semibold">
                      <Image src={rating} className="mr-1" />{fb.rating}
                    </h5>
                  </h5>
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
