import React from "react";


function Searchbar() {
  return(
      <nav class="white">
        <div class="nav-wrapper">
          <form action="" autocomplete="off">
            <div class="input-field">
              <input id="search" type="search" placeholder="What are you looking for today?" required></input>
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
  )
}

export default Searchbar;