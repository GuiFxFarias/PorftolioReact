import { Element } from "react-scroll";
import axios from "axios";
import { handleSubmit } from "../../script";
import "./contactStyle.css";

function Contact() {
  return (
    <>
      <Element name="contact" className="elementC">
        <h1>Entre em contato comigo</h1>
        <div className="contactFinal">
          <form action={handleSubmit}>
            <div className="form">
              <fieldset>
                <input type="text" name="name" id="name" placeholder="Nome" />
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Assunto"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Mensagem"
                ></textarea>
                <button type="submit" className="custom-btn btn-5">
                  Enviar mensagem
                </button>
              </fieldset>
            </div>
          </form>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7442.001047842981!2d-47.97391950725272!3d-21.152377438060636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b998e5290eeaeb%3A0x4793e7a85618e3d5!2sR.%20Francisco%20Carlos%2C%2094%20-%20Jardim%20Montreal%2C%20Sert%C3%A3ozinho%20-%20SP%2C%2014169-320!5e0!3m2!1spt-BR!2sbr!4v1676296998192!5m2!1spt-BR!2sbr"
              allowFullScreen=""
              loading="lazy"
              title="myMap"
              className="map"
            ></iframe>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Contact;
