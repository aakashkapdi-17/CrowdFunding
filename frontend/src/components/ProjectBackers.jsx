import React from "react";

// import Identicons from "react-identicons";
import { FaEthereum } from "react-icons/fa";

const ProjectBackers = () => {
  return (
    <div className="flex flex-col items-start justify-center px-6 mx-auto">
      <div className="max-h-[calc(100vh_-_28rem)] overflow-y-auto shadow-md rounded-md w-full mb-10">
        <table className="min-w-full ">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left"
              >
                Refund Status
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(30)
              .fill()
              .map((backing, i) => (
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4 text-sm font-light whitespace-nowrap">
                    <div className="flex items-center justify-start space-x-2">
                      {/* <Identicons
                        className="object-contain w-10 h-10 rounded-full shadow-md"
                        string="8x15.........lea2"
                        size={25}
                      /> */}
                      <span>8x15.........lea2</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-light whitespace-nowrap">
                    <small className="flex items-center justify-start space-x-2">
                      <FaEthereum />
                      <span className="font-medium text-gray-700">{3} ETH</span>
                    </small>
                  </td>
                  <td className="px-6 py-4 text-sm font-light whitespace-nowrap">
                    {false ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 text-sm font-light whitespace-nowrap">
                    {new Date().getTime()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectBackers;
