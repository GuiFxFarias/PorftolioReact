import { Element } from "react-scroll";
import "./homeStyle.css";

function Home() {
  return (
    <>
      <Element name="home" className="element">
        <div className="apresent">
          <h1>Front End Developer,</h1>
          <div className="hello">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in
            error excepturi iure qui impedit ut, modi dolores laudantium tempore
            facilis itaque ea saepe aliquid, repudiandae quisquam? Voluptates,
            magni fuga.
          </div>
        </div>
      </Element>
    </>
  );
}

export default Home;
