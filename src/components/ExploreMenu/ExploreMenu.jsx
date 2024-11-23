import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explora nuestra carta </h1>
      <p className="explore-menu-text">
        Sumérgete en un universo culinario donde cada plato cuenta una historia
        y cada sabor despierta los sentidos. Nuestra carta ha sido
        cuidadosamente diseñada para ofrecerte una amplia selección de delicias
        que celebran ingredientes frescos y técnicas artesanales. Desde opciones
        clásicas hasta creaciones innovadoras, cada elección promete una
        explosión de sabor. Nuestra misión va más allá de satisfacer tus
        antojos: buscamos convertir cada bocado en una experiencia inolvidable.
        Déjate llevar por el aroma, el color y la textura de nuestros platillos,
        creados para deleitarte en cada momento. Porque en nuestra mesa, tu
        felicidad es el ingrediente principal.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                className={category === item.menu_name ? "active" : ""}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
