import { useState } from "react";
import { Element } from "react-scroll";
import css from "../assets/image/css.png";
import js from "../assets/image/Js.png";
import ts from "../assets/image/react.png";
import react from "../assets/image/ts.png";
import "animate.css";
import "./qualitysStyle.css";

function Qualitys() {
  const [lang, setLang] = useState(
    "Clique na linguagem e aprenda um pouco sobre ela"
  );

  const list = [
    {
      id: 1,
      value: "Um",
      src: css,
    },
    {
      id: 2,
      value: "Dois",
      src: js,
    },
    {
      id: 3,
      value: "Tres",
      src: ts,
    },
    {
      id: 4,
      value: "Quatro",
      src: react,
    },
  ];

  // function lang01() {
  //   setLang(
  //     "Com a utlização do CSS3 deixamos o site mais bonito, responsivo e atrativo para os clientes"
  //   );
  // }
  // function lang02() {
  //   setLang(
  //     "Com a utilização do JavaScript realizamos suas interações e funcionalidade dentro do seu site, como enviar e-mail, clicar em alguma barra lateral, etc."
  //   );
  // }
  // function lang03() {
  //   setLang(
  //     "Em ReactJs, se realiza toda a montagem do seu site pelo formato de componetização"
  //   );
  // }
  // function lang04() {
  //   setLang(
  //   "Com o TypeScript é praticamente o mesmo uso do JavaScript, porém, Ts seria uma linguagem com mais tipagem e não tão dinâmica como é oJavaScript"
  //   );
  // }

  return (
    <>
      <div className="divPaiQuality">
        <Element name="quality" className="elementQ">
          <div className="flexQ">
            <h1 className="h1">H</h1>
            <h1 className="h1">a</h1>
            <h1 className="h1">b</h1>
            <h1 className="h1">i</h1>
            <h1 className="h1">l</h1>
            <h1 className="h1">i</h1>
            <h1 className="h1">d</h1>
            <h1 className="h1">a</h1>
            <h1 className="h1">d</h1>
            <h1 className="h1">e</h1>
            <h1 className="h1">s</h1>
          </div>
          <div className="flexQuality">
            {list.map((item) => (
              <div className="blocksLanguages">
                <img src={item.src} key={item.id} alt="" />
              </div>
            ))}
          </div>
          <div className="apresentationLanguage">
            <p className="fadeIn">{lang}</p>
          </div>
        </Element>
      </div>
    </>
  );
}

export default Qualitys;
