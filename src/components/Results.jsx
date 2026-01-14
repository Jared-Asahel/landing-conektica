const Results = () => {
  return (
    <section className="results">
      <h2 className="results__title">Resultados que hablan por sí solos</h2>
      <p className="results__description">
        No solo lo decimos nosotros. Nuestros clientes han transformado sus
        negocios.
      </p>
      <div className="results__content">
        {/* Artículo 1: Incremento de Rentabilidad (YA ESTABA ASÍ) */}
        <article>
          <p>
            Aumenta tus márgenes de ganancia al optimizar cada etapa del ciclo
            de ventas y reducir costos operativos innecesarios.
          </p>
          <div className="results__content-info">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh_pKQxpfRjaeOhIpOZfFzej2nBlj1cN4smd7XYIwUx6_P4VwWx-6_0ehiLZIOzHMXvTq40MW7w_MAaUEabC9FmILYwFyrrtI7MfgbqAlW4roUdrN6Ds_4ihWZnyJm5y42IdXFuTCdA9tbveZ6RLPylkK3ZguxXj5hbrT4TICROXUbdSs0oXMXXkxKbyJA-3lxWFu-rrJ8Y4dfDnNgDmhKGRiD_xKbza4SIdkiLmyQRBp2_9Aj8w7ri8CiuugE0Bmtk4uxgdyPFxA"
              alt="Foto de María Rodríguez"
              className="results__icon"
            />
            <div className="results__container-text">
              <h2>María Rodríguez</h2>
              <p>CEO, Innovatech</p>
            </div>
          </div>
        </article>

        {/* Artículo 2: Optimización de Procesos (Modificado para incluir Testimonio) */}
        <article>
          <p>
            Implementamos flujos de trabajo eficientes y automatización para que
            tu equipo se concentre en cerrar ventas, no en tareas manuales.
          </p>
          <div className="results__content-info">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwee_UpzCMs_ewKWXQMHr3Vn60CYaoLAbo3SbPOGmFyXtGuOLtrkG5d6AbkQBN6xJ4AOTqzFIEpriVN9ZjR5VXDPaOAkiqyn0Pd-yUOaAov7C8vA7BoYUnVxvjVCiEdMxtz82uiCpKd6F8uv92G2_oDlMPVuEgIdp_ysTra5XkNWoewW-5nOeG9bHlmfEYYgfDXmEekPzNBgxK74Sn1bIVQDCSriVUz3MFkay7t5FdLaNVGEzmHcooQx0tPKzung__LPAWgR8UVUc"
              alt="Foto de Juan Pérez"
              className="results__icon"
            />
            <div className="results__container-text">
              <h2>Juan Pérez</h2>
              <p>Director de Operaciones, GlobalCorp</p>
            </div>
          </div>
        </article>

        {/* Artículo 3: Escalabilidad Sostenible (Modificado para incluir Testimonio) */}
        <article>
          <p>
            Te proporcionamos la estructura y las herramientas para crecer sin
            caos, asegurando que tu éxito sea duradero y manejable.
          </p>
          <div className="results__content-info">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqjWom-iO37_MZouOFMoqEZ3zvNbKfES9MfrZhG5Vd545Rso-saNN_E1xX6eOpQwskGOnz2XjGC11Xi4sHf1GmbQNpsAmIHsWll9qMhPFzRC2MupDS3HOEzH6E19-MD0cXczEApqL44ZJ35b7ciNl3Nt2hvHgkNHN7ybu5GLtoccvS_FKnaWfgm6d48R7l7AUJWoNmPhyA9WvCYJIBZSy1cNMRMODfk-j4nxDgt6b2Q3f-w1e0S5u2JPW1ouTSsRs9-YM6S94jgLE"
              alt="Foto de Sofía Castro"
              className="results__icon"
            />
            <div className="results__container-text">
              <h2>Sofía Castro</h2>
              <p>Fundadora, E-Commerce Pro</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Results;
