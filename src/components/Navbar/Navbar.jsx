import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isAnimating, setIsAnimating] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleSearchClick = () => {
    setIsAnimating(true);
    // Volver al icono original después de 1 segundo (duración de la animación)
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""}`}
        >
          INICIO
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""}`}
        >
          CARTA
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mob-app")}
          className={`${menu === "mob-app" ? "active" : ""}`}
        >
          CENTRAL APP
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "active" : ""}`}
        >
          CONTÁCTANOS
        </a>
      </ul>
      <div className="navbar-right">
        <Link
          to="/cart"
          className="navbar-search-icon"
          onClick={handleSearchClick}
        >
          <img
            src={isAnimating ? assets.search_icon_click : assets.search_icon}
            alt=""
            className="basket-icon"
          />
        </Link>
        {/* <img src={assets.search_icon} alt="" /> */}
        <Link to="/cart" className="navbar-basket-icon">
          {/* Mostrar el GIF si hay artículos en el carrito, de lo contrario el icono estático */}
          <img
            src={
              getTotalCartAmount() > 0
                ? assets.basket_icon_full
                : assets.basket_icon
            }
            alt="Carrito"
            className="basket-icon"
          />
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Ingresar</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p> Orders </p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p> Logout </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
