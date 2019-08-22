import React from 'react';
import { NavLink } from 'react-router-dom'

function Header() {
    const stylez = {
        color : 'white',
        texteDecoration: 'none'
    }
    return (
        <div className="header">
            <ul className="list-group list-group-horizontal-sm text-center">
                <NavLink exact to="/" style={stylez}>
                    <li className="list-group-item" activeclassname="active">ABOUT</li>
                </NavLink>
                <NavLink exact to="/portofolio" style={stylez}>
                    <li className="list-group-item" activeclassname="active">PORTOFOLIO</li>
                </NavLink>
                <NavLink exact to="/reference" style={stylez}>
                    <li className="list-group-item" activeclassname="active">REFERENCE</li>
                </NavLink>

            </ul>
        </div>
    );
}

export default Header;