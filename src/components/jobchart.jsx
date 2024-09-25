import React from "react";
import { Bar } from "react-chartjs-2"; 
import Chart from "chart.js/auto"; 

const JobChart = ({ data }) => {
  const getJobData = () => {
    const jobCount = {};
    data.forEach((applicant) => {
      const jobName = applicant["Job name"];
      jobCount[jobName] = (jobCount[jobName] || 0) + 1; 
    });

    return {
      labels: Object.keys(jobCount), 
      datasets: [
        {
          label: "Number of Applicants",
          data: Object.values(jobCount), 
          backgroundColor: "rgba(75, 192, 192, 0.6)", 
          borderColor: "rgba(75, 192, 192, 1)", 
          borderWidth: 1,
        },
      ],
    };
  };

  const chartData = getJobData();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-half">
      <h2 className="text-2xl font-semibold mb-4">Job Distribution</h2>
      <div 
        style={{ 
          height: '500px', // Total height of the chart container
          overflowY: 'auto', // Enable vertical scrolling
          width: '100%', // Full width
        }}
      >
        <div style={{ height: '100%', width: '100%' }}> {/* Full size wrapper for the Bar chart */}
          <Bar
            data={chartData}
            options={{
              indexAxis: 'y', 
              responsive: true,
              maintainAspectRatio: false, // Set to false to respect container height
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  grid: {
                    display: false, 
                  },
                },
              },
            }}
            height={400} // The height of the chart can be adjusted based on your preference
          />
        </div>
      </div>
    </div>
  );
};

export default JobChart;
