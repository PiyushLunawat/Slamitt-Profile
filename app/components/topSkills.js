import React, { useState, useEffect, useRef } from "react";
import { Typography } from "antd";
import Chart from "chart.js/auto";
import Image from "next/image";
import Detail from '../../public/images/detailsIcon.png';

const TopSkill = ({ userData }) => {
  const [skills, setSkills] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [
      "Public Speaking", "Confidence", "Analytical Approach", "Time Management", "Application", "Team Player",
    ],
    datasets: [
      {
        label: "Top Gun",
        data: [5, 4, 2, 5, 2, 5],
        fill: true,
        backgroundColor: "rgba(66, 249, 230, 0.2)",
        borderColor: "rgb(66 249 230)",
      },
      {
        label: "Average Joe",
        data: [3, 2, 4, 5, 2, 4],
        fill: true,
        backgroundColor: "rgba(47 ,255, 67, 0.2)",
        borderColor: "rgb(47 255 67)",
      },
      {
        label: "You",
        data: [4, 4, 3, 4, 4, 3], // Default data, will be updated
        fill: true,
        backgroundColor: "rgba(179, 23, 254, 0.2)",
        borderColor: "rgb(179, 23, 254)",
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
          dataset.label === "You" 
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
      <div className="hide profileSidebarHead">
        <Typography.Title level={2}>Top Skills</Typography.Title>
        <Image src={Detail} alt="Details Icon" className="ml-[10px] mb-[0.5rem]" />
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
