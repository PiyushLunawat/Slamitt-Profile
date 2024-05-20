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
import user from "../public/images/user.png"
import userBG from '../public/images/userBG.png';
import dropdown from '../public/images/dropdown.png';
import lit from '../public/images/lit.png';
import axios from 'axios'; // Make sure to install axios if not already installed

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
  <div className='hide flex w-full h-[92px] justify-between items-center'>
    <Image src={liticon} alt='lit' className='h-[92px]'/>
    <div className='flex items-center mr-[50px]'>
      <Image src={user} alt="user" className="h-[44px] w-[44px] rounded-full lg:h-[44px] lg:w-[44px] mr-[15px]"/>
      <Image src={dropdown} alt="^" className=""/>
    </div>
  </div>
  <div className='w-full mb-7'>
    <Image src={userBG} alt="Banner" className='h-[40vh]'/>
    <Image src={user} alt="user" className="mobile-user h-[154px] w-[154px] rounded-full lg:h-[154px] lg:w-[154px] relative ml-[50px] mt-[-65px] mb-35"/>
  </div>
  <div className="mobile-view">
    <section className="min-h-screen w-screen lg:flex md:grid items-stretch text-white ">
      <div className="lg:w-4/6 md:w-9/10 w-full bg-white-100 text-zinc-900 justify-center text-center sm:px-16 md:px-24 px-4 z-0">
        <UserInfo userData={userx}/>
        <Counter userData={userx}/>
        <Interest userData={userx}/>
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
      <div className="lg:w-4/6 md:w-9/10 w-full bg-white-100 text-zinc-900 justify-center text-center sm:px-16 md:px-24 px-4 z-0">
        <UserInfo userData={userx}/>
        <Experience userData={userx}/>
        <Interest userData={userx}/>
        <Counter userData={userx}/>
        <Competition userData={userx}/>
        <HighLight userData={userx}/>
      </div> 
      <div className="lg:w-2/6 md:w-9/10 w-full bg-white-100 text-zinc-900 justify-center text-center md:px-16 px-4 z-0">
        <TopSkill userData={userx}/>
        <Endorsement userData={userx}/>
        <Synergy userData={userx}/>
      </div>
    </section>
  </div>
  
  <footer className='hide flex w-full h-[92px] flex-row relative bottom-0 bg-black text-white justify-center items-center'>
    <Typography.Text className="text-[20px] !text-white">Powered by</Typography.Text>
    <Image src={lit} alt='lit' className='w-[52px] h-[56px] mx-4'/>
  </footer>
    
  </>
  );
};

export default Home;