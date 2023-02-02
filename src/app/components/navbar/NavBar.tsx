import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function NavBar() {
  return (
    <nav>
      <section>
        <h1>NAVBAR</h1>
        <div className="navContent">
          <div className="navLinks">
            <NavLink to="/">Posts</NavLink>
            <NavLink to="/users">Users</NavLink>
          </div>
        </div>
      </section>
    </nav>
  );
}
