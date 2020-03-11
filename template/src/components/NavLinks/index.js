import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
    return(
        <ul className="navigation-links">
            <li className="nav-link">
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/bosses">Bosses</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks