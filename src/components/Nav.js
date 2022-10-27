import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul className="ul-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/matched">Click here if you found your match</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
