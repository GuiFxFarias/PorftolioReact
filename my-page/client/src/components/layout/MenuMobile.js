import { Link } from "react-scroll";
import "./menuMobileStyle.css";

function MenuMobile({ customClass }) {
  return (
    <div className={`displayOff ${customClass}`}>
      <nav className="navbarM" style={{ borderBottom: "1px solid black" }}>
        <div className="flexPaiM">
          <ul className={`listM`}>
            <li className="itemM">
              {" "}
              <Link
                activeClass="active"
                className="homeM itens"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-250}
              >
                Apresentação
              </Link>
            </li>
            <li className="itemM">
              {" "}
              <Link
                activeClass="active"
                className="qualityM itens"
                to="quality"
                spy={true}
                smooth={true}
                duration={500}
                offset={-190}
              >
                Habilidades
              </Link>
            </li>
            <li className="itemM">
              {" "}
              <Link
                activeClass="active"
                className="projectsM itens"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-190}
              >
                Projetos
              </Link>
            </li>
            <li className="itemM">
              {" "}
              <Link
                activeClass="active"
                className="contactM itens"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-290}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MenuMobile;
