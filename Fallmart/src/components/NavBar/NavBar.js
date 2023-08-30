import React from "react";
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className="header_core">
      <div className="left_core">
        <input
          className="header_searchInput"
          type="text"
          placeholder="What can we help you find?"
        />
      </div>
      <img
        className="logomiddle_core"
        src="https://i.imgur.com/xgA0d20.png"
        alt=""
      />
      <div className="right_core">
        <div className="account">
          <a href="/account/order-tracking">Orders</a>
          <span> & </span>
          <button className="signbutton">Sign In</button>
        </div>
        <div className="location">
          <img
            src="https://i.imgur.com/gXCgwJG.jpg"
            alt=""
            width="40"
            height="40"
          />
        </div>
        <div className="favorites">
          <img
            src="https://i.imgur.com/UpoCDeP.png"
            alt=""
            width="30"
            height="30"
          />
        </div>
        <div className="cart">
          <img
            src="https://i.imgur.com/TWI8Zuk.png"
            alt=""
            width="30"
            height="30"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
