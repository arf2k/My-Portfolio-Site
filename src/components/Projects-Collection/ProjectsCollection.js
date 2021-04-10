import React from "react";
import ProjectCard from "../Project-Card/ProjectCard";
import "../../styles/ProjectCollection.styles.scss";
import Projects from "../../pages/Projects/Projects";


const ProjectsCollection = () => {

     // const renderCards = () => {
     //      return projects.map((proj) => <ProjectCard key={proj.id} {...proj}/>)
     // } 
return(
     <>
     <div className="project-collection-container">
     <ProjectCard/>
     </div>
     </>
)

}

export default ProjectsCollection