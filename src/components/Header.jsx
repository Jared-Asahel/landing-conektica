import Logo from "../imagenes/image.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content-logo">
        <img src={Logo} alt="" className="header__logo" />
        <h2 className="header__logo-text">NEKTICA</h2>
      </div>
      <nav className="header__nav">
        <Link className="header__link" to="/">
          Inicio
        </Link>
        <Link className="header__link" to="/nosotros">
          Nosotros
        </Link>
        <Link className="header__link" to="/contacto">
          Contacto
        </Link>
      </nav>
      <button className="header__button">Solicitar Asesoría</button>
    </header>
  );
};

export default Header;
