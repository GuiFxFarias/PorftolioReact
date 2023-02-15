import { Element } from "react-scroll";
import "./contactStyle.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.warn("Preencha os dados", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_4rrqzne",
        "template_fi3dxi7",
        templateParams,
        "Y5m61D_i3_5IlyitC"
      )
      .then(
        (res) => {
          console.log("Email enviado", res.status, res.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Email enviado", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (err) => {
          console.log("ERRO: ", err);
          toast.error("Email nao foi enviado", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  }

  return (
    <>
      <div className="flexC">
        <h1 className="h1">E</h1>
        <h1 className="h1">n</h1>
        <h1 className="h1">t</h1>
        <h1 className="h1">r</h1>
        <h1 className="h1">e</h1>
        <h1 className="h1"> </h1>
        <h1 className="h1">e</h1>
        <h1 className="h1">m</h1>
        <h1 className="h1"> </h1>
        <h1 className="h1">C</h1>
        <h1 className="h1">o</h1>
        <h1 className="h1">n</h1>
        <h1 className="h1">t</h1>
        <h1 className="h1">a</h1>
        <h1 className="h1">t</h1>
        <h1 className="h1">o</h1>
        <h1 className="h1"> </h1>
        <h1 className="h1">C</h1>
        <h1 className="h1">o</h1>
        <h1 className="h1">m</h1>
        <h1 className="h1">i</h1>
        <h1 className="h1">g</h1>
        <h1 className="h1">o</h1>
      </div>
      <Element name="contact" className="elementC">
        <div className="contactFinal">
          <form onSubmit={sendEmail} className="formSub">
            <div className="form">
              <fieldset>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="btn left" onFocus={Element}>
                  Enviar mensagem
                </button>
              </fieldset>
            </div>
          </form>
          <div className="mapDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14884.000084251013!2d-47.9713124!3d-21.152397450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b998e5290eeaeb%3A0x4793e7a85618e3d5!2sR.%20Francisco%20Carlos%2C%2094%20-%20Jardim%20Montreal%2C%20Sert%C3%A3ozinho%20-%20SP%2C%2014169-320!5e0!3m2!1spt-BR!2sbr!4v1676388125505!5m2!1spt-BR!2sbr"
              title="meyMap"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
      </Element>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default Contact;
