import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="header">
      <img src={assets.restaurante} alt="Restaurante" className="header-background" />
      <div className="header-contents">
        <h2>Sabores que te inspiran</h2>
        <p>Satisfacemos tus antojos y elevamos tu experiencia gastronómica</p>
      </div>
    </div>
  );
};

export default Header;
