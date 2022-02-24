import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;