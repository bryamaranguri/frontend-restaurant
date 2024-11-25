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

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        // Guardar el token
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        // Verificar el rol del usuario para redirigirlo al panel de administración si es admin
        const role = response.data.role; // Asegúrate de que el backend te envíe el rol

        if (role === "admin") {
          // Redirigir al admin
          window.location.href = "https://localhost:5174"; // Panel de admin
        } else {
          // Redirigir a la página principal o alguna otra página
          window.location.href = "/"; // Redirigir a la página principal o dashboard de usuario
        }

        setShowLogin(false); // Cerrar el popup de login
      } else {
        alert(response.data.message); // Mostrar el mensaje de error si no es exitoso
      }
    } catch (error) {
      console.error("Error in login:", error);
      alert("Error durante el login.");
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
