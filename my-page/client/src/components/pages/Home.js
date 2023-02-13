import { Element } from "react-scroll";


import "./homeStyle.css";

function Home() {
  return (
    <>
      <Element name="home" className="element">
        <div className="apresent">
          <h1>Front End Developer</h1>
          <div className="hello">
            Olá pessoal, sou um Desenvolvedor Front-End preparado e capacitado
            para trazer a melhor experiencia dentro do seu site, seja ele
            e-commerce, blog ou qualquer outro tipo de site.
          </div>
        </div>
      </Element>
    </>
  );
}

export default Home;
