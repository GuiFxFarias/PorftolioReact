import { Element } from "react-scroll";
import "./projectsStyle.css";

function Projects() {
  return (
    <>
      <Element name="projects" className="elementP">
        <h1>Projects</h1>
        <div className="apresentantionProject">
          <div className="flexProject">
            <div className="project">
              <h3>Site para criação de uma rotina</h3>
              <a
                rel="noreferrer"
                href="https://routineweb-3ea27.web.app/"
                target="_blank"
              >
                Clique aqui
              </a>
            </div>
            <div className="project">
              <h3 style={{ margin: "auto" }}>Entrega de portfolio</h3>
              <a
                href="https://guifxfarias.github.io/RodrigoFarias/certificados.html"
                target="_blank"
                rel="noreferrer"
                style={{ marginBottom: "10px" }}
              >
                Clique aqui
              </a>
            </div>
            <div className="project later">
              <h2>Em breve</h2>
            </div>
            <div className="project later">
              <h2>Em breve</h2>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Projects;
