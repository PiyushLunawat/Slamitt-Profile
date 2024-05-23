"use client";
import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import UserInfo from './components/userInfo';
import Experience from "./components/experiences";
import Interest from "./components/interests";
import Counter from "./components/counter";
import Competition from "./components/competitions";
import HighLight from "./components/highlights";
import TopSkill from './components/topSkills';
import Endorsement from "./components/endorsements";
import Synergy from "./components/synergy";
import Image from "next/image"
import liticon from "../public/images/liticon.png";
import user from "../public/images/user.svg"
import userBG from '../public/images/userBG.png';
import dropdown from '../public/images/dropdown.svg';
import lit from '../public/images/lit.svg';
import axios from 'axios'; 

const Home = () => {
  const [selectedComp, setSelectedComp] = useState("Competition");
  const [userData, setUserData] = useState(null);
  const [userx, setUserx] = useState(null);


  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('/api/users')
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => console.error('Failed to fetch data:', error));
    }, 5000);  // Fetches the latest data every 5 seconds
  
    return () => clearInterval(intervalId);  // Clean up the interval on component unmount
  }, []);
  
  useEffect(() => {
    if (userData && userData.length > 0) {
      setUserx(userData[0]); // Now this will only run once userData is not null and has length
    }
  }, [userData]); // This useEffect depends on userData

  // console.log(userx);
  
  const handleCompClick = (selectedComp) => {
    setSelectedComp(selectedComp);
  };

   if (!userData) {
    return <p className="text-center m-[20%] font-black">Loading...</p>; 
  }

  return (
  <>
  <div className='fixed flex z-10 bg-white w-full h-[64px] sm:h-[85px] justify-between items-center shadow-[0_10px_20px_0px_rgba(0,0,0,0.1)]'>
    <Image src={liticon} alt='lit' className='h-[64px] sm:h-[92px] w-auto'/>
    <div className='flex items-center mr-[20px] sm:mr-[50px]'>
      <Image src={user} alt="user" className="h-[39px] w-[39px] sm:h-[46px] sm:w-[46px] rounded-full mr-[15px] sm:mr-[20px] border border-gray-400 cursor-pointer"/>
      <Image src={dropdown} alt="^" className="cursor-pointer"/>
    </div>
  </div>
  <div className='w-full mb-11 mt-[52px] sm:mt-[85px]'>
    <Image src={userBG} alt="Banner" className='h-[300px] sm:h-[44vh]'/>
    <Image src={user} alt="user" className="mobile-user h-[154px] w-[154px] bg-white rounded-full relative sm:ml-4 lg:ml-16 mt-[-65px] mb-35"/>
  </div>
  <div className="mobile-view">
    <section className="min-h-screen w-screen lg:flex md:grid items-stretch text-white ">
      <div className="lg:w-4/6 md:w-9/10 w-full bg-white-100 text-zinc-900 justify-center text-center px-4">
        <UserInfo userData={userx}/>
        <Experience userData={userx}/>
        <Interest userData={userx}/>
        <Counter userData={userx}/>
        <div className="scroller mb-10">
          <div onClick={() => handleCompClick("Competition")} className={selectedComp === "Competition" ? "selected-comp" : "comps"}>Competitions</div>
          <div onClick={() => handleCompClick("HighLight")} className={selectedComp === "HighLight" ? "selected-comp" : "comps"}>Feedback</div>
          <div onClick={() => handleCompClick("TopSkill")} className={selectedComp === "TopSkill" ? "selected-comp" : "comps"}>Top Skills</div>
          <div onClick={() => handleCompClick("Endorsement")} className={selectedComp === "Endorsement" ? "selected-comp" : "comps"}>Endorsements</div>
          <div onClick={() => handleCompClick("Synergy")} className={selectedComp === "Synergy" ? "selected-comp" : "comps"}>Synergy</div>
        </div>
          {selectedComp === "Competition" && <Competition userData={userx}/>}
          {selectedComp === "HighLight" && <HighLight userData={userx}/>}
          {selectedComp === "TopSkill" && <TopSkill userData={userx}/>}
          {selectedComp === "Endorsement" && <Endorsement userData={userx}/>}
          {selectedComp === "Synergy" && <Synergy userData={userx}/>}
      </div>
    </section>  
  </div>
  <div className="hide flex bg-white">
    <section className="min-h-screen w-screen lg:flex md:grid items-stretch text-white ">
      <div className="lg:w-[68%] md:w-9/10 w-full bg-white-100 text-zinc-900 justify-center text-center sm:px-6 lg:px-16 px-4 z-0">
        <UserInfo userData={userx}/>
        <Experience userData={userx}/>
        <Interest userData={userx}/>
        <Counter userData={userx}/>
        <Competition userData={userx}/>
        <HighLight userData={userx}/>
      </div> 
      <div className="lg:w-[32%] md:w-9/10 w-full bg-white-100 text-zinc-900 justify-center text-center sm:px-6 max-[640px]:px-4 z-0">
        <TopSkill userData={userx}/>
        <Endorsement userData={userx}/>
        <Synergy userData={userx}/>
      </div>
    </section>
  </div>
  
  <footer className='flex w-full h-[88px] flex-row relative bottom-0 bg-black text-white justify-center items-center'>
    <h5 className="text-[20px] !text-white mr-4">Powered by</h5>
    <Image src={lit} alt='lit' className='w-[51px] h-[56px]'/>
  </footer>
    
  </>
  );
};

export default Home;