import { useState } from "react";
import { Element } from "react-scroll";
import "./qualitysStyle.css";

function Qualitys() {
  const [lang, setLang] = useState(
    "Clique na linguagem e aprenda um pouco sobre ela"
  );

  function lang01() {
    setLang("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati minus eaque, molestiae accusamus porro voluptate? Distinctio, asperiores in, eum exercitationem ipsum, tempora tempore assumenda temporibus enim error laboriosam et?");
  }
  function lang02() {
    setLang("javascript");
  }
  function lang03() {
    setLang("CSSS");
  }
  function lang04() {
    setLang("TYPESCRIPT");
  }

  return (
    <>
      <div className="divPaiQuality">
        <Element name="quality" className="elementQ">
          <h1>Soft Skills</h1>
          <div className="flexQuality">
            <div className="blocksLanguages" onClick={lang01}></div>
            <div className="blocksLanguages" onClick={lang02}></div>
            <div className="blocksLanguages" onClick={lang03}></div>
            <div className="blocksLanguages" onClick={lang04}></div>
          </div>
          <div className="apresentationLanguage">
            <p>{lang} </p>
          </div>
        </Element>
      </div>
    </>
  );
}

export default Qualitys;
