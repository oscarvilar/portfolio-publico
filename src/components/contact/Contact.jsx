import "./contact.css";
import Contacto from "../../img/contacto.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // AÑADIR INFORMACION CUENTA EMAIL JS
        "service_########",
        "template_#######",
        formRef.current,
        "user_###########"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <h1 className="c-title">Información y Contacto</h1>
      <div className="c-wrapper">
        <div className="c-left">
        <img className="img-contacto" src={Contacto} alt="" />
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>¿Tienes alguna duda?</b> No dudes en contactar. Te responderé lo más rápido posible.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Asunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Mensaje" name="message" />
            {/* Clave public  captcha */}
            {/* <div className="g-recaptcha" data-sitekey="######################"></div> */}
            <button>Enviar</button>
            {done && "Email Enviado..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;