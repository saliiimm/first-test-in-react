import React from "react";

const Nav = ({ page1, page2, page3 }) => {
  return (
    <div className="nav-div">
      <ul>
        <li>{page1}</li>
        <li>{page2}</li>
        <li>{page3}</li>
      </ul>
    </div>
  );
};
export default Nav;
