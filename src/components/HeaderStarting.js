import React from 'react';

export default function HeaderStarting() {
  return (
    <nav className="navbar navbar-expand-lg head ">
  <div className="container-fluid">
    <lable className="navbar-brand textt" >TEXTERIO</lable>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link textt2" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link textt2" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link textt2" href="#">Description</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}
