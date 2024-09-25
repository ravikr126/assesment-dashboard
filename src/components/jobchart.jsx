import React from "react";
import { Bar } from "react-chartjs-2"; 
import Chart from "chart.js/auto"; 

const JobChart = ({ data }) => {
  const getJobData = () => {
    const jobCount = {};
    data.forEach((applicant) => {
      const jobName = applicant["Job name"];
      if (jobName) { // Check if jobName is defined
        jobCount[jobName] = (jobCount[jobName] || 0) + 1; 
      }
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
  const totalApplicants = chartData.datasets[0].data.reduce((a, b) => a + b, 0); // Calculate total applicants

  console.log("Total Applicants: ", totalApplicants); // Debugging line

  return (
    <div className="p-6 bg-white rounded-lg shadow-md h-full"> 
      <h2 className="text-2xl font-semibold mb-4">Job Distribution (Total: {totalApplicants})</h2> {/* Show total */}
      <div 
        style={{ 
          height: '500px', 
          overflowY: 'auto', 
          width: '100%',
        }}
      >
        <Bar
          data={chartData}
          options={{
            indexAxis: 'y', 
            responsive: true,
            maintainAspectRatio: false, 
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
          height={400} 
        />
      </div>
    </div>
  );
};

export default JobChart;
