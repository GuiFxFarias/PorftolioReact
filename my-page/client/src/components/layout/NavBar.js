import { Link } from "react-scroll";
import "./navbarStyle.css";

function Navbar() {
  return (
    <>
      <nav className="navbar" style={{ borderBottom: "1px solid black" }}>
        <div className="flexPai">
          <h1 className="name">Guilherme Farias</h1>
          <ul className="list">
            <li className="item">
              {" "}
              <Link
                activeClass="active"
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Apresentação
              </Link>
            </li>
            <li className="item">
              {" "}
              <Link
                activeClass="active"
                className="quality"
                to="quality"
                spy={true}
                smooth={true}
                duration={500}
                offset={-200}
              >
                Qualidades
              </Link>
            </li>
            <li className="item">
              {" "}
              <Link
                activeClass="active"
                className="projects"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-160}
              >
                Projetos
              </Link>
            </li>
            <li className="item">
              {" "}
              <Link
                activeClass="active"
                className="contact"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-250}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
