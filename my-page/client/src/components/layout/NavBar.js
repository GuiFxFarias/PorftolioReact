import { Link } from "react-scroll";
import "./navbarStyle.css";
import { AiOutlineMenu } from "react-icons/ai";
import MenuMobile from "./MenuMobile";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("off");

  function handleMenu() {
    if (menu === "off") {
      setMenu("on");
    } else {
      setMenu("off");
    }
  }

  return (
    <>
      <nav className="navbar" style={{ borderBottom: "1px solid black" }}>
        <div className="flexPai">
          <h1 className="name">Guilherme Farias</h1>
          <AiOutlineMenu className="iconMenu" onClick={handleMenu} />
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
                Habilidades
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
                offset={-150}
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
                offset={-220}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MenuMobile customClass={menu} />
    </>
  );
}

export default Navbar;
