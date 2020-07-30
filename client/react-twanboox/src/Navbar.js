import React from "react";
import './Navbar.css';

function Navbar() {
  return(
    <nav>
      <div class="nav-wrapper blue">
        <a href="#!" class="brand-logo"><i class="material-icons left">local_library</i>TwanBoox</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="#!"><i class="material-icons left">import_contacts</i>My library</a></li>
          <li><a href="#!"><i class="material-icons right">language</i>Explore the worlds books</a></li>
        </ul>
      </div>
    </nav>
  )
}






export default Navbar;