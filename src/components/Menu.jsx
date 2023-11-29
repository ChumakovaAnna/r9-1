import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const pendingClass = (evt) => {
    console.log(evt)
    const {isActive, isPending} = evt
    console.log(isActive)
    if (isActive) {
      // console.log(active)
      return "menu__item"
    }
    
    if (isPending) {
      return 'menu__item-active'
    }
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
