import React from "react";

const navBar = () => {
  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon">SecondHand</div>
        <ol>
          <li><a href="/">home</a></li>
          <li><a href="/">Categories</a></li>
        </ol>
        <ol>
          <li>
            <div className="search-box">
              <input type="search" placeholder="Search..." />
              <span className="fa fa-search"></span>
            </div>
          </li>
        </ol>
        <ol>
          <li><a href="/"><span className="fa fa-shopping-basket"></span></a></li>
          <li><a href="/"><span className="fa fa-bell"></span></a></li>
          <li><a href="/login">Sign In</a></li>
        </ol>
        <label for="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </div>
  )
}

export default navBar;

