import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { setToken } = useContext(StoreContext);

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

    let newUrl = "https://backend-central-production-f267.up.railway.app";
    newUrl +=
      currState === "Sign Up" ? "/api/user/register" : "/api/user/login";

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        const { token, role } = response.data;

        // Guardar el token y el rol
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role); // Almacena el rol para futuras verificaciones

        // Redirigir según el rol
        if (role === "admin") {
          window.location.href = "https://admin-restaurant-nine.vercel.app"; // Panel de administración
        } else {
          window.location.href = "/"; // Página principal o dashboard de usuario
        }

        setShowLogin(false); // Cierra el popup de login
      } else {
        alert(response.data.message); // Manejo de error en la respuesta del backend
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
