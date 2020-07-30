import React from "react";


function Searchbar(props) {
  return(
      <nav class="white">
        <div class="nav-wrapper">
          <form onSubmit={props.searchBook} action="" autoComplete="off">
            <div class="input-field">
              <input onChange={props.getSearchValue} id="search" type="search" placeholder="What are you looking for today?" required></input>
              <label class="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
  )
}

export default Searchbar;