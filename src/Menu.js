import { NavLink } from "react-router-dom";
function Menu () {
  const activeClassName = " menu__item-active"
  return (
    <nav className="menu">
      <NavLink to="/" className={ ({ isActive }) => "menu__item" + (!isActive ? "" : activeClassName) }>Главная</NavLink>
      <NavLink to="/drift" className={ ({ isActive }) => "menu__item" + (!isActive ? "" : activeClassName) }>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className={ ({ isActive }) => "menu__item" + (!isActive ? "" : activeClassName) }>Time Attack</NavLink>
      <NavLink to="/forza" className={ ({ isActive }) => "menu__item" + (!isActive ? "" : activeClassName) }>Forza Karting</NavLink>
    </nav>
  );
}

export default Menu;
