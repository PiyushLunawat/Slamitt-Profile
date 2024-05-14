import React, { useEffect, useRef } from "react";
import { Avatar, Col, Row, Typography } from "antd";
import Chart from "chart.js/auto";
import Image from "next/image"
import Detail from '../../public/images/detailsIcon.png';

const TopSkill = () => {
  const chartRef = useRef(null);
  let radarChart = null;

  const data = {
    labels: [
      "Public Speaking", "Confidence", "Analytical Approach", "Time Management", "Application", "Team Player",
    ],
    datasets: [
      {
        label: "Top Gun",
        data: [5, 4, 2, 5, 2, 5], // Set data from 1 to 5
        fill: true,
        backgroundColor: "rgba(66, 249, 230, 0.2)",
        borderColor: "rgb(66 249 230)",
      },
      {
        label: "Average Joe",
        data: [3, 2, 4, 5, 2, 4], // Set data from 1 to 5
        fill: true,
        backgroundColor: "rgba(47 ,255, 67, 0.2)",
        borderColor: "rgb(47 255 67)",
      },
      {
        label: "You",
        data: [4, 4, 3, 4, 4, 3], // Set data from 1 to 5
        fill: true,
        backgroundColor: "rgba(179, 23, 254, 0.2)",
        borderColor: "rgb(179, 23, 254)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 1, // Min value for the scale
        max: 5, // Max value for the scale
        ticks: {
          stepSize: 1, // Step size between ticks
          beginAtZero: true,
          fontSize: 28,
        },
      },
    },
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if exists
      if (radarChart !== null) {
        radarChart.destroy();
      }

      radarChart = new Chart(ctx, {
        type: "radar",
        data: data,
        options: options,
      });
    }

    // Cleanup
    return () => {
      if (radarChart !== null) {
        radarChart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full profileTopSkills">
      <div className="hide profileSidebarHead">
        <Typography.Title level={2} >Top Skills</Typography.Title>
        <Image src={Detail} alt="!" className="ml-[10px] mb-[0.5rem]"/>
      </div>
      <div className="profileStatsHolder">
        <div className="profileStatsPlaceholderText hiddenMobile">
          Finish setting up your account to access your top skills
        </div>
        <div className="profileTopSkillsChart">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default TopSkill;