import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  <li>About</li>
                </Link>
                <Link to="/users">
                  <li>Users</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
