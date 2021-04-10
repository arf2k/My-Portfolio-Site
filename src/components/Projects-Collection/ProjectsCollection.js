import React from "react";
import ProjectCard from "../Project-Card/ProjectCard";
import "../../styles/ProjectCollection.styles.scss";
import Projects from "./Projects"


const ProjectsCollection = () => {

     const renderCards = () => {
          return Projects.map((project) => <ProjectCard key={project.id} project={project}/>)
     } 
return(
     <>
     <div className="project-collection-container">
    {renderCards()}
     </div>
     </>
)

}

export default ProjectsCollection