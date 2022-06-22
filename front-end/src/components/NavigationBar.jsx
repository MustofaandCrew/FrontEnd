import React from "react";

export default function NavBar() {
  return (
    <div className="container-nav">
      <input type="checkbox" id="check" />
      <nav>
        <div className="icon"><a href="/">SecondHand</a></div>
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/">Categories</a></li>
        </ol>
        <div className="search-box">
          <input type="search" placeholder="Search..." />
          <span className="fa fa-search"></span>
        </div>
        <ol>
          <li><a href="/"><span className="fa fa-shopping-basket"></span></a></li>
          <li><a href="/"><span className="fa fa-bell"></span></a></li>
          <li><h4>|</h4></li>
          <li><a href="/login">Sign In</a></li>
        </ol>
        <ol className="vertical-screen">
          <li className="nav-span"><a href="/"><span className="fa fa-home"> Home</span></a></li>
          <li className="nav-span"><a href="/"><span className="fa fa-list"> Categories</span></a></li>
          <li className="nav-span"><a href="/"><span className="fa fa-shopping-basket"> Shopping Cart</span></a></li>
          <li className="nav-span"><a href="/"><span className="fa fa-bell"> Notification</span></a></li>
          <li className="nav-signin"><a href="/login"><span>Sign In</span></a></li>
        </ol>
        <label for="check" className="bar">
          <span className="fa fa-bars" id="bars"></span>
          <span className="fa fa-times" id="times"></span>
        </label>
      </nav>
    </div>
  )
}

