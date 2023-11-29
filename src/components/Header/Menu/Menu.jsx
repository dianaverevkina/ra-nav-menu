import { NavLink } from 'react-router-dom'

export const Menu = () => {
  const activeLink = ({isActive}) => isActive ? 'menu__item menu__item-active' : 'menu__item';
  return (
    <nav className="menu">
      <NavLink className={activeLink} to="/">Главная</NavLink>
      <NavLink  className={activeLink} to="/drift">Дрифт-такси</NavLink>
      <NavLink  className={activeLink} to="/timeattack">Time Attack</NavLink>
      <NavLink  className={activeLink} to="/forza">Forza Karting</NavLink>
    </nav>
  )
}
