import MAP from "../imagenes/map-2.svg";
import PHONE from "../imagenes/phone.svg";
import SETTINGS from "../imagenes/settings-bolt.svg";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Contáctanos</h2>
      <div className="contact__container">
        {/* Información de contacto */}
        <div className="contact__info">
          <h3 className="contact__subtitle">Acércate</h3>

          <div className="contact__item">
            <img src={MAP} alt="Ubicación" className="contact__icon" />
            <div>
              <h4 className="contact__label">Oficina</h4>
              <p>Teziutlán Norte 1 B, Col. La Paz, Puebla, Pue. CP 72160</p>
            </div>
          </div>

          <div className="contact__item">
            <img src={PHONE} alt="Teléfono" className="contact__icon" />
            <div>
              <h4 className="contact__label">Teléfono</h4>
              <p>2222 49 93 41</p>
            </div>
          </div>

          <div className="contact__item">
            <img src={SETTINGS} alt="WhatsApp" className="contact__icon" />
            <div>
              <h4 className="contact__label">WhatsApp</h4>
              <p>+52 1 222 773 5039</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact__form-container">
          <h3 className="contact__subtitle">Tu marca estará en buenas manos</h3>
          <form className="contact__form" id="form">
            <h4 className="contact__form-title">Obtén tu asesoría</h4>

            <label>
              Nombre completo
              <input type="text" placeholder="Ingresa tu nombre" />
            </label>

            <label>
              Email
              <input type="email" placeholder="Ingresa tu correo" />
            </label>

            <label>
              Teléfono
              <input type="tel" placeholder="Ingresa tu número" />
            </label>

            <button className="contact__orm-button">Solicitar Asesoría</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
