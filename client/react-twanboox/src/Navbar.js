import React from 'react';
import './Navbar.css';

function Navbar() {
  return(
    <nav>
      <div className="nav-wrapper blue">
        <a href="/" className="brand-logo"><i className="material-icons left">local_library</i>TwanBoox</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#!"><i className="material-icons left">import_contacts</i>My library</a></li>
          <li><a href="/"><i className="material-icons right">language</i>Explore the worlds books</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
