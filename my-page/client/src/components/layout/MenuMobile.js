import { Link } from "react-scroll";
import "./menuMobileStyle.css";

function MenuMobile({ customClass }) {
  return (
    <div className={`displayOff `}>
      <nav
        className={`navbarM ${customClass}`}
        style={{ borderBottom: "1px solid black" }}
      >
        <div className="flexPaiM">
          <ul className={`listM ${customClass}`}>
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
                offset={-200}
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
                offset={-200}
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
                offset={-300}
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
