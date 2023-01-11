import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
function Header() {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          {/* <svg width={80} height={80}> */}
            <img src="/images/icon.svg" alt="taskachiever" width={20}></img>
          {/* </svg> */}

          <div className="settings">
            <ul>
              <li>+</li>
              <li>
                <HiOutlineLightBulb></HiOutlineLightBulb>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
