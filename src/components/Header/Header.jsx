import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <header>
      <span className="popular">Películas Populares</span>
      <span className="upcoming">Películas Próximas</span>
      <span className="top_rated">Películas más votadas</span>
    </header>
  );
};
export default Header;
