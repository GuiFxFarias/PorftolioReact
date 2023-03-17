import { Element } from "react-scroll";
import "./projectsStyle.css";

function Projects() {
  return (
    <>
      <Element name="projects" className="elementP">
        <div className="flexC">
          <h1 className="h1">P</h1>
          <h1 className="h1">r</h1>
          <h1 className="h1">o</h1>
          <h1 className="h1">j</h1>
          <h1 className="h1">e</h1>
          <h1 className="h1">t</h1>
          <h1 className="h1">o</h1>
          <h1 className="h1">s</h1>
        </div>
        <div className="apresentantionProject">
          <div className="flexProject">
            <div className="project">
              <h3>Site para criação de uma rotina</h3>
              <a
                rel="noreferrer"
                href="https://project-routine.vercel.app/"
                target="_blank"
              >
                Clique aqui
              </a>
            </div>
            <div className="project">
              <h3 style={{ margin: "auto" }}>Entrega de portfolio</h3>
              <a
                href="https://guifxfarias.github.io/RodrigoFarias/index.html"
                target="_blank"
                rel="noreferrer"
                style={{ marginBottom: "10px" }}
              >
                Clique aqui
              </a>
            </div>
            <div className="project">
            <h3 style={{ margin: "auto" }}>Aplicativo de finanças</h3>
              <a
                href="https://expo.dev/accounts/fariasg/projects/meuApp/builds/018840ac-804a-4eeb-ad31-3ecce3c99a2a"
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
          </div>
        </div>
      </Element>
    </>
  );
}

export default Projects;
