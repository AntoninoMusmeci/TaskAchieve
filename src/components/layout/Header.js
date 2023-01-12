import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
function Header() {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
    
          <img src="/images/icon.svg" alt="taskachiever" width={20}></img>
 
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">+</li>
            <li className="settings__darkmode">
              <HiOutlineLightBulb></HiOutlineLightBulb>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
