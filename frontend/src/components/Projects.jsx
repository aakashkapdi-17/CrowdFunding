import React from "react";
import { Link } from "react-router-dom";
// import Identicons from "react-identicons";

const Projects = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-wrap items-center justify-center">
        {Array(6)
          .fill()
          .map((card, id) => (
            <ProjectCard key={id} id={id} project={card} />
          ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, id }) => (
  <div id="projects" className="w-64 m-4 rounded-lg shadow-lg">
    <Link to={`/projects/${id}`}>
      <img
        src="https://media.wired.com/photos/5926e641f3e2356fd800ad1d/master/w_2560%2Cc_limit/AnkiTA.jpg"
        alt="Project title"
        className="object-cover w-full h-64 rounded-xl"
      />
      <div className="p-4">
        <h5>Creating a Household Robot</h5>
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-3">
            {/* <Identicons
              className="rounded-full shadow-md"
              string="8x15.........lea2"
              size={15}
            /> */}
            <small className="text-gray-700">8x15.........lea2</small>
          </div>
          <small className="text-gray-500">2 days left</small>
        </div>
        <div className="w-full ">
          <div
            className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "50%" }}
          ></div>
          <div className="flex flex-wrap items-center justify-between mt-4 mb-2 font-bold text-gray-500 ">
            <small>{14} Backers</small>
            <div>
              <small className="text-green-500">Open</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Projects;
