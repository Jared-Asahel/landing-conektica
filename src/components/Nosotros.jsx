import { motion } from "framer-motion";

const Nosotros = () => {
  return (
    <section className="nosotros">
      <motion.h2
        className="nosotros__title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Nosotros
      </motion.h2>

      <div className="nosotros__container">
        <motion.div
          className="nosotros__text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            En <span className="highlight">Naranja Creativa</span>, somos una
            agencia de marketing digital enfocada en hacer que tu marca brille.
            Combinamos <strong>estrategia, creatividad y tecnología</strong>{" "}
            para generar resultados medibles y duraderos.
          </p>

          <p>
            Nos apasiona <strong>conectar marcas con personas</strong>,
            transformar ideas en experiencias y construir identidades únicas que
            destaquen en un mundo digital competitivo.
          </p>

          <p>
            Nuestro equipo está formado por profesionales en{" "}
            <strong>
              branding, diseño, redes sociales y campañas digitales
            </strong>
            , comprometidos con ofrecer soluciones auténticas, creativas y
            efectivas.
          </p>

          <button className="nosotros__button">
            Conoce nuestros servicios
          </button>
        </motion.div>
      </div>

      <motion.div
        className="nosotros__values"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="nosotros__subtitle">Nuestros pilares</h3>

        <div className="nosotros__cards">
          <motion.article
            className="nosotros__card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4>Creatividad Estratégica</h4>
            <p>
              Creamos ideas poderosas que conectan con tu público y comunican tu
              esencia de forma auténtica.
            </p>
          </motion.article>

          <motion.article
            className="nosotros__card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4>Resultados Reales</h4>
            <p>
              Diseñamos campañas medibles que impulsan el crecimiento y generan
              impacto tangible en tu negocio.
            </p>
          </motion.article>

          <motion.article
            className="nosotros__card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h4>Innovación Constante</h4>
            <p>
              Adoptamos nuevas herramientas, tendencias y metodologías para
              mantener tu marca siempre un paso adelante.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
};

export default Nosotros;
