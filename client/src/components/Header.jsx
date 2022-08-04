import React from "react";
import "../styles/components/Header.scss";
import { BiArrowBack, BiDotsVerticalRounded, BiPhone } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <div className="header__main">
        <div className="header__arrow">
          <BiArrowBack />
        </div>
        <figure className="header__avatar">
          <img
            src="https://en.apkshki.com/storage/10028/icon_61964aa9cfe58_10028_w256.png"
            alt=""
          />
        </figure>
        <h1 className="header__title">ChatApp</h1>
      </div>
      <div className="header__more">
        <div className="header__settings">
          <BiDotsVerticalRounded />
        </div>
      </div>
    </header>
  );
};

export default Header;
