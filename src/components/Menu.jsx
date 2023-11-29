import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const pendingClass = (evt) => {
    const {isActive} = evt
    if (isActive) {
      return 'menu__item menu__item-active'
    }
      return "menu__item"
  }

  return (<nav>
    <div className="menu">
      <NavLink to="/" exact="true" className={pendingClass}>main</NavLink>
      <NavLink to="/drift" exact="true" className={pendingClass}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" exact="true" className={pendingClass}>time attack</NavLink>
      <NavLink to="/forza" exact="true" className={pendingClass}>forza karting</NavLink>
    </div>

  </nav>)
}
