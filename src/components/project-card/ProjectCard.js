import React from "react";
import "../../styles/ProjectCard.styles.scss";


const ProjectCard = ({project}) => {
return (
     <div className="project-card-container">
          <div className="project-card"> 
          <p classname="proj-title">{project.title}</p>
          <img alt="project" src={project.imgLoc} className="proj-image"/>
          <p>{project.description}</p>
          <button>Go to deets </button>
          </div>
     
     </div>

)

}

export default ProjectCard