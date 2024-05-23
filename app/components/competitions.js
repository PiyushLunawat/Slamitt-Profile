import React, {useState, useEffect} from "react";
import { Typography } from "antd";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.svg';
import team from '../../public/images/team.svg';
import endorsmentIcon from '../../public/images/endorsmentIcon.svg';
import feedbackIcon from '../../public/images/feedbackIcon.svg';
import teams from '../../public/images/teams.svg';
import rounds from '../../public/images/rounds.svg';
import judges from '../../public/images/judges.svg';
import Comptype from '../../public/images/Competitiontype.svg';
import teamlogo from '../../public/images/teamlogo.svg';

const Competition = ({userData}) => {
  const [selectedComp, setSelectedComp] = useState("Task");
  const [competition,setCompetition]=useState([]);
  const [comp, setComp] = useState(0);

  useEffect(() => {
    if (userData && userData.competitions) {
      setCompetition(userData.competitions);
      // Calculate the total number of competitions
      setComp(userData.competitions.length);
    }
  }, [userData]);

  
  return (
    <div className="w-full mb-12">
      <div className="hide profileSidebarHead pb-10">
      <h1 className="text-[32px] font-semibold pl-4">Competitions ({comp})</h1>
        <Image src={Detail} alt="!" className="ml-[10px] cursor-pointer"/>
      </div>
      {competition.map((competition, index) => (
      <>
      <div className="scroller mb-10">
          <div onClick={() => handleCompClick("Task")} className={selectedComp === "Task" ? "selected-comp" : "comps"}>Task</div>
          <div onClick={() => handleCompClick("Media")} className={selectedComp === "Media" ? "selected-comp" : "comps"}>Media</div>
          <div onClick={() => handleCompClick("Submission")} className={selectedComp === "Submission" ? "selected-comp" : "comps"}>Submission</div>
        </div>
      <div className="mobile-compcard sm:flex rounded-2xl shadow-[0_0px_20px_0px_rgba(0,0,0,0.1)] mb-5">
         <div className="comp-banner sm:w-[20%] hide flex items-center justify-center bg-violet-700 rounded-tl-2xl rounded-bl-2xl px-5">
            <div className='bg-white w-auto rounded-full px-5 py-2 mt-44'>
              <h1 className="flex justify-center leading-none items-center text-[12px] font-semibold">
                <Image src={team} alt="i" className='mr-[5px]'/>{competition.teamName}
              </h1>
            </div>
         </div>

         <div className="grid text-left py-5 w-full">
            <div className="mob-card pl-12">
              <div className="flex sm:ml-[-6rem]">
                <Image src={teamlogo} alt="team-logo" className="w-[47px] sm:w-[81px] h-[47px] sm:h-[81px] mr-4 sm:mt-4 mb-4 lg:mb-0"/>
                <div className="">
                  <h1 className="text-[22px] font-semibold sm:my-2 pl-2">{competition.competitionName}</h1>
                  <h5 className="text-[14px] font-semibold sm:my-3 font-medium pl-2 text-gray-500">{competition.duration}</h5>
                </div>  
              </div>
              <div className="flex gap-4 pb-2">
              <div className='border border-gray-300 rounded-full px-5 py-2'>
                <h5 className="text-[16px] font-medium mob-font flex justify-between items-center">
                  <Image src={Comptype} alt="i" className='mr-[5px]'/>{competition.competitionType}
                </h5>
              </div>
              <div className='border border-gray-300 rounded-full px-5 py-2'>
                <h5 className="text-[16px] font-semibold mob-font flex justify-between items-center">
                  <Image src={endorsmentIcon} alt="i" className='mr-[5px] w-[17px] h-[17px]'/>5
                </h5>
              </div>
              <div className='border border-gray-300 rounded-full px-5 py-2'>
              <h5 className="text-[16px] font-semibold mob-font flex justify-between items-center">
                  <Image src={feedbackIcon} alt="i" className='mr-[5px] w-[17px] h-[17px]'/>5
                </h5>
              </div>
            </div>
            </div>

            <hr class="border-b border-gray-200 my-5"></hr>

            <div className="mob-card flex justify-between items-center sm:pl-12 sm:pr-8">
                <h5 className="text-[16px] font-bold mob-font flex justify-between items-center text-gray-600">
                  <Image src={teams} alt="i" className='mr-[5px]'/>{competition.numberOfParticipants} Participants
                </h5>
                <h5 className="text-[16px] font-bold mob-font flex justify-between items-center text-gray-600">
                  <Image src={rounds} alt="i" className='mr-[5px]'/>{competition.numberOfRounds} Rounds
                </h5>
                <h5 className="text-[16px] font-bold mob-font flex justify-between items-center text-gray-600">
                  <Image src={judges} alt="i" className='mr-[5px]'/>{competition.numberOfJudges} Judges
                </h5>
            </div>
         </div>
      </div>
    </> 
    ))}
    </div>
  );
};

export default Competition;