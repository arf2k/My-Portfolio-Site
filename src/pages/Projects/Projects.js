import React from "react";
// import ProjectCard from "../../components/Project-Card/ProjectCard";
import ProjectsCollection from "../../components/Projects-Collection/ProjectsCollection";
import "../../styles/ProjectsPage.styles.scss"

const Projects = () => {
     return(
          <>
          <div className="projects-page">
     <ProjectsCollection/>
          </div>
          </>
     )
}

export default Projects