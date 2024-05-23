import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top " style={{backgroundColor:'black'}}>
      <div className="container justify-content-between ">
        <Link className="navbar-brand" to="/">
          My Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/My_Profile_Web/">
                {/* Home */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                {/* Education */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                {/* Project */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">
                {/* Contact */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
