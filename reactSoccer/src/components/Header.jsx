import "./Header.css"
import logo from "../assets/images/logo.png"; 
import user1 from "../assets/images/user1.png";

const Header = () =>{
    return(
            <header className="header">
      <section className="header__container">
       <img
            className="header__logo"
            src={logo}
            alt="logo"
        />
        <div className="header__texts">
          <h1 className="header__title">Gestor Online de Fútbol Ribera</h1>
          <h2 className="header__subtitle">
            Gestión de temporadas, equipos y plantillas
          </h2>
        </div>
        <div className="header__user">
          <img
            className="header__user-image"
            src={user1}
            alt="user image"
          />
            <p className="header__user-name">{sessionStorage.getItem("userName")}</p> 
        </div>
      </section>
    </header>
    )
}

export default Header;