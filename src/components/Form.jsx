const Form = () => {
  return (
    <>
      <div className="form__container">
        <div>
          <h2 className="form__title">
            Triplica tus ventas en 90 dias con nuestra metodología probada, sin
            contratar más personal.
          </h2>
          <p className="form__paragraph">
            Descubre como optimizar tus procesos y escalar tu negocio de manera
            sostenible. Rellena el formulario para obtener tu asesoría gratuita
          </p>
        </div>
        <div className="form__container-form">
          <form className="form" id="form">
            <h2>Obtén su asesoría gratuita</h2>
            <label htmlFor="nombre">
              Nombre completo
              <input type="text" id="nombre" placeholder="Ingresa tu nombre" />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" id="email" placeholder="Ingresa tu número" />
            </label>
            <label htmlFor="número">
              Telefóno
              <input type="text" id="número" placeholder="Ingresa tu nombre" />
            </label>
            <button>Solicitar Asesoría Gratuita</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
