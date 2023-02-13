import { Element } from "react-scroll";
import "./homeStyle.css";

function Home() {
  return (
    <>
      <Element name="home" className="element">
        <div className="apresent">
          <h1>Front End Developer,</h1>
          <div className="hello">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
            voluptatum pariatur accusamus, suscipit officia ipsum iusto ullam
            sapiente quo facere obcaecati fuga! Quidem rerum non dolorum
            debitis, repellat atque accusantium?
          </div>
        </div>
      </Element>
    </>
  );
}

export default Home;
