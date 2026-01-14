import Arrow from "../imagenes/arrow-up-right.svg";
import Brand from "../imagenes/brand-swift.svg";
import Settings from "../imagenes/settings-bolt.svg";

const Targets = () => {
  return (
    <section className="targets">
      <h2 className="targets__title">
        Todo lo que necesitas para escalar tu negocio
      </h2>
      <p className="targets__description">
        Nuestra metodología se enfoca en tres pilares clave que garantizan un
        crecimiento medible y sostenible.
      </p>
      <div>
        <article>
          <img src={Arrow} alt="" className="targets__icon" />
          <h3>Incremento de Rentabilidad</h3>
          <p>
            Aumenta tus márgenes de ganancia al optimizar cada etapa del ciclo
            de ventas y reducir costos operativos innecesarios.
          </p>
        </article>
        <article>
          <img src={Settings} alt="" className="targets__icon" />
          <h3>Optimización de Procesos</h3>
          <p>
            Implementamos flujos de trabajo eficientes y automatización para que
            tu equipo se concentre en cerrar ventas, no en tareas manuales.
          </p>
        </article>
        <article>
          <img src={Brand} alt="" className="targets__icon" />
          <h3>Escalabilidad Sostenible</h3>
          <p>
            Te proporcionamos la estructura y las herramientas para crecer sin
            caos, asegurando que tu éxito sea duradero y manejable.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Targets;
