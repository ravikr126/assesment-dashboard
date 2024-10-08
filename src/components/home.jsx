import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTable } from "react-table";
import JobChart from "./jobchart";

const Home = () => {
  const [applicantsData, setApplicantsData] = useState([]);

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setApplicantsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, []);
  const totalJobs = new Set(
    applicantsData.map((applicant) => applicant["Job name"])
  ).size;
  const totalApplicants = applicantsData.length;
  const aiCredits = 20000;

  const columns = React.useMemo(
    () => [
      {
        Header: "Latest Candidate",
        columns: [
          {
            Header: "Name",
            accessor: "Name",
          },
          {
            Header: "Job Name",
            accessor: "Job name",
          },
          {
            Header: "Rating",
            accessor: "rating",
          },
          {
            Header: "Date",
            accessor: "date",
          },
        ],
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: applicantsData,
    });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-[#C4D7FF] p-10 rounded-lg shadow-lg flex flex-col gap-5">
        <h2 className="text-6xl font-semibold">Welcome back, Lewis</h2>
        <p className="mt-2 text-gray-600 text-2xl font-medium">
          Here's what's changed in your talent hunt journey!
           You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workspace from here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col gap-3">
            <div className="bg-white p-8  rounded-lg shadow-md flex justify-between">
              <div className="flex items-center">
                <div className="bg-blue-100 p-4  rounded-full">
                  <span role="img" aria-label="jobs">
                    💼
                  </span>
                </div>
                <div className="ml-4">
                  <p className=" font-bold text-3xl">{totalJobs}</p>
                  <p className="text-xl font-medium text-gray-500">Total Jobs</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <span role="img" aria-label="applicants">
                    👥
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-3xl font-bold">{totalApplicants}</p>{" "}
                  <p className="text-xl font-medium text-gray-500">Applicants</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center">
                <div className="bg-purple-100 p-4 rounded-full">
                  <span role="img" aria-label="credits">
                    ✉️
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-3xl font-bold ">
                    {aiCredits.toLocaleString()}
                  </p>
                  <p className="text-xl font-medium text-gray-500">AI credits</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col ">
           <div className="flex items-center">
              <div className="bg-pink-100 p-4 rounded-full">
                <span role="img" aria-label="private-board">
                  📝
                </span>
              </div>
              <div className="ml-4">
                <p className="text-lg font-bold">Private Job Board</p>
                <p className="text-xl font-medium  text-gray-500">
                  Accessible via company-specific URL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[600px] gap-3 mt-5">
        <div className="p-6 bg-white h-full rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-4">Latest Candidates</h2>

          {applicantsData.length === 0 ? (
            <p>Loading data or no data available...</p>
          ) : (
            <div style={{ height: "500px", overflowY: "auto" }}>
              <table
                {...getTableProps()}
                className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      className="bg-gray-100 text-left"
                    >
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          className="p-4 text-gray-700 font-semibold"
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr
                        {...row.getRowProps()}
                        className="border-t border-gray-300 hover:bg-gray-50"
                      >
                        {row.cells.map((cell) => (
                          <td
                            {...cell.getCellProps()}
                            className="p-4 text-gray-700"
                          >
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="p-6 bg-white h-full rounded-lg shadow-md flex-1">
          <JobChart data={applicantsData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
