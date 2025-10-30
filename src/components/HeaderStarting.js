import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderStarting() {
  return (
    <nav className="navbar navbar-expand-lg head">
      <div className="container-fluid">
        <label className="navbar-brand textt">TEXTERIO</label>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link textt2" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link textt2" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link textt2" to="/description">Description</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
