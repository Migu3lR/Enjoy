import React from 'react';
import { Link } from 'react-router-dom';


function LoggedInMenu() {
  return (
    <ul id="LoggedInMenu" className="dropdown-content">
      <li><Link to="/enjoy/logout">Cerrar sesión</Link></li>
    </ul>
  );
}

export default LoggedInMenu;
