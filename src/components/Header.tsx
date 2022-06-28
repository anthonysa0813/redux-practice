import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { HeaderContainer } from "../ui/styles";
const Header = () => {
  return (
    <HeaderContainer className="">
      <div className="headerContainer ">
        <AiOutlineMenuUnfold />
        <h1>Chukwudi</h1>
        <div className="inputSearch ">
          <input type="text" />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
