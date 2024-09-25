import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [applicantsData, setApplicantsData] = useState([]);

  useEffect(() => {
    // Fetch data using axios
    axios
      .get("/data.json") // Assuming the file is located in the public folder
      .then((response) => {
        setApplicantsData(response.data); // Set the data
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, []);

  // Get unique job names by creating a Set from the job names in the data
  const totalJobs = new Set(applicantsData.map((applicant) => applicant["Job name"])).size;
  const totalApplicants = applicantsData.length; // Calculating total applicants dynamically
  const aiCredits = 20000; // Example data for AI credits













  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-[#C4D7FF] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Welcome back, Lewis</h2>
        <p className="mt-2 text-gray-600 text-2xl">
          Here's what's changed in your talent hunt journey! You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workspace from here.
        </p>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                {/* Icon */}
                <span role="img" aria-label="jobs">
                  💼
                </span>
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold">{totalJobs}</p>
                <p className="text-sm text-gray-500">Total Jobs</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-2 rounded-full">
                {/* Icon */}
                <span role="img" aria-label="applicants">
                  👥
                </span>
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold">{totalApplicants}</p> {/* Total applicants */}
                <p className="text-sm text-gray-500">Applicants</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-full">
                {/* Icon */}
                <span role="img" aria-label="credits">
                  ✉️
                </span>
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold">{aiCredits.toLocaleString()}</p>
                <p className="text-sm text-gray-500">AI credits</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="bg-pink-100 p-2 rounded-full">
                {/* Icon */}
                <span role="img" aria-label="private-board">
                  📝
                </span>
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold">Private Job Board</p>
                <p className="text-sm text-gray-500">
                  Accessible via company-specific URL
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
