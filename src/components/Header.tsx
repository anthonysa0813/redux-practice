import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Header = () => {
  return (
    <header className="">
      <div className="headerContainer ">
        <AiOutlineMenuUnfold />
        <h1>Chukwudi</h1>
        <div className="inputSearch ">
          <input type="text" />
        </div>
      </div>
    </header>
  );
};

export default Header;
