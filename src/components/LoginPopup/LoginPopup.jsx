import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Sign Up") {
      newUrl += "/api/user/register";
    } else {
      newUrl += "/api/user/login";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>{" "}
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Nombre"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="E-mail"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Contraseña"
          />
        </div>
        <button type="submit">
          {currState === "Login" ? "Login" : "Crear cuenta"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" />
          <p>
            Al continuar, acepto los términos de uso y la política de
            privacidad.
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Crear una cuenta nueva?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click Aquí</span>
          </p>
        ) : (
          <p>
            Ya tienes una cuenta?{" "}
            <span onClick={() => setCurrState("Login")}>
              Inicie sesión aquí
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
