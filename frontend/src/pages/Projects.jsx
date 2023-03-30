import React from "react";
import BackProject from "../components/BackProject";
import DeleteProject from "../components/DeleteProject";
import UpdateProject from "../components/EditProject";
import ProjectBackers from "../components/ProjectBackers";
import ProjectDetails from "../components/ProjectDetails";

const Projects = () => {
  return (
    <>
      <ProjectDetails />
      <ProjectBackers />
      <UpdateProject />
      <BackProject />
      <DeleteProject />
    </>
  );
};

export default Projects;
