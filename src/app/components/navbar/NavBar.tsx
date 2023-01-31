import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function NavBar() {
  return (
    <nav>
      <section>
        <h1>NAVBAR</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Posts</Link>
            <Link to="/counter">Counter</Link>
          </div>
        </div>
      </section>
    </nav>
  );
}
