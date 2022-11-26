import React from "react";
import { Link } from "react-router-dom";
import './header.scss'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <div className="nav-big-menu">
            <ul className="list-unstyled m-0 p-0 d-flex">
                <li>
                    <Link  to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}> Contact</Link>
                </li>
            
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
