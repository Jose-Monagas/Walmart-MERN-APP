import React from "react";
import styles from "./PrimaryNav.module.scss";

function PrimaryNav() {
  return (
    <ul className="primary_list">
      <li>Furniture</li>
      <li>Outdoor</li>
      <li>Tabletop & Bar</li>
      <li>Kitchen</li>
      <li>Bedding</li>
      <li>Bath</li>
      <li>Decor & Pillows</li>
      <li>Rugs</li>
      <li>Lighting</li>
      <li>Window</li>
      <li>Holidays</li>
      <li>Gifts</li>
      <li className="sale">SALE</li>
      <li>&kids</li>
    </ul>
  );
}

export default PrimaryNav;
