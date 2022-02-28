import React, { useState } from "react";
import "./style.css";
import Menu from "./collegeApi.js";
import MenuCard from "./CollegeCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  
];

console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <MenuCard menuData={menuData} />
      <div
      style={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'right',
        height: '10vh',
    }}
    >
      <button type="button" id="add">Add Academy</button>
      </div>
    </>
  );

  }
export default Resturant;