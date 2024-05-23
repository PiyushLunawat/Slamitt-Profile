import React, { useState, useEffect, useRef } from "react";
import { Typography } from "antd";
import Chart from "chart.js/auto";
import Image from "next/image";
import Detail from '../../public/images/detailsIcon.svg';
import TGr from '../../public/images/TGrep.svg';
import TGi from '../../public/images/TGicon.svg';
import AJr from '../../public/images/AJrep.svg';
import AJi from '../../public/images/AJIcon.svg';
import Yr from '../../public/images/Yrep.svg';
import Yi from '../../public/images/Yicon.svg';


const TopSkill = ({ userData }) => {
  const [skills, setSkills] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [
      "Public Speaking", "Confidence", "Analytical Approach", "Time Management", "Application", "Team Player",
    ],
    datasets: [
      {
        label: "TG",
        data: [5, 4, 2, 5, 2, 5],
        fill: true,
        backgroundColor: "rgba(0, 240, 255, 0.2)",
        borderColor: "rgba(0, 240, 255, 1)",
      },
      {
        label: "AJ",
        data: [3, 2, 4, 5, 2, 4],
        fill: true,
        backgroundColor: "rgba(0 ,255, 25, 0.2)",
        borderColor: "rgba(0, 255, 25, 1)",
      },
      {
        label: "Y",
        data: skills, // Default data, will be updated
        fill: true,
        backgroundColor: "rgba(175, 8, 254, 0.2)",
        borderColor: "rgba(175, 8, 254, 1)",
      },
    ],
  });

  useEffect(() => {
    if (userData && userData.topSkills) {
      setSkills(userData.topSkills);

      // Update the chart data with the user's skills
      setChartData(prevData => ({
        ...prevData,
        datasets: prevData.datasets.map(dataset => 
          dataset.label === "Y" 
            ? { ...dataset, data: userData.topSkills } 
            : dataset
        )
      }));
    }
  }, [userData]);

  const chartRef = useRef(null);
  let radarChart = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if exists
      if (radarChart !== null) {
        radarChart.destroy();
      }

      radarChart = new Chart(ctx, {
        type: "radar",
        data: chartData,
        options: {
          scales: {
            r: {
              min: 1,
              max: 5,
              ticks: {
                stepSize: 1,
                beginAtZero: true,
              },
            },
          },
        },
      });
    }

    // Cleanup
    return () => {
      if (radarChart !== null) {
        radarChart.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead z-10">
        <h1 className="text-[30px] font-semibold pl-2">Top Skills</h1>
        <Image src={Detail} alt="Details Icon" className="ml-[10px] cursor-pointer" />
      </div>
      <div className="profileStatsHolder">
      <div className="relative bg-white h-[20px] top-[25px] z-10"></div>
        <div className="">
          <canvas ref={chartRef}></canvas>
          <div className="flex justify-between">
          <h5 className="flex gap-1">
              <Image src={TGr} alt="TG"/>
              <Image src={TGi} alt="T-G"/>
              Top Gun
            </h5>
            <h5 className="flex gap-1">
              <Image src={AJr} alt="AJ"/>
              <Image src={AJi} alt="AJ"/>
              Average Joe
            </h5>
            <h5 className="flex gap-1 text-[14px]">
              <Image src={Yr} alt="Y"/>
              <Image src={Yi} alt="Y"/>
              You
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSkill;
