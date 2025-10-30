import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderStarting() {
  return (
    <nav
      className="navbar navbar-expand-lg head"
      style={{
        background: "linear-gradient(90deg, #2c2546 10%, #463a75 55%, #21b0ed 100%)",
        boxShadow: "0 4px 14px #120e2380"
      }}
    >
      <div className="container-fluid">
        <span
          className="navbar-brand textt"
          style={{
            fontWeight: 900,
            fontSize: "2rem",
            letterSpacing: "1.5px",
            background: "linear-gradient(90deg, #ffaf81 10%, #d978ee 65%, #62d7f5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          TEXTERIO
        </span>
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
              <Link
                className="nav-link textt2"
                aria-current="page"
                to="/"
                style={{
                  marginRight: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.09em",
                  position: "relative",
                  transition: "color 0.19s"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#fcb045")}
                onMouseOut={e => (e.currentTarget.style.color = "#fff")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link textt2"
                to="/contact"
                style={{
                  marginRight: 14,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.09em",
                  position: "relative",
                  transition: "color 0.19s"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#62d7f5")}
                onMouseOut={e => (e.currentTarget.style.color = "#fff")}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link textt2"
                to="/description"
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.09em",
                  position: "relative",
                  transition: "color 0.19s"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#d978ee")}
                onMouseOut={e => (e.currentTarget.style.color = "#fff")}
              >
                Description
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: 4,
          position: "absolute",
          bottom: 0,
          left: 0,
          background: "linear-gradient(90deg,#fcb045 0,#d978ee 60%,#62d7f5 100%)",
          opacity: 0.8,
        }}
      />
    </nav>
  );
}
