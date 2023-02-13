import { Element } from "react-scroll";
import "./projectsStyle.css";

function Projects() {
  return (
    <>
      <Element name="projects" className="elementP">
        <h1>Projects</h1>
        <div className="apresentantionProject">
          <div className="flexProject">
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Projects;
