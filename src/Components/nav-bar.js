import { Link } from "react-router-dom";

export const NavBarComponent = ({ showMenu, menuClickHandler }) => {
  return (
    <nav>
      <div className="nav-row">
        <div>
          <img src="assets/shared/logo.svg" alt="" />
        </div>
        <div onClick={menuClickHandler}>
          <img src="assets/shared/icon-hamburger.svg" alt="" />
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <div onClick={menuClickHandler} className="close-icon">
            <img src="assets/shared/icon-close.svg" alt="" />
          </div>
          <div className="mobile-menu-div">
            <ul>
              <Link to="/">
                <li>
                  <span>00</span> Home
                </li>
              </Link>
              <Link to="destination">
                <li>
                  <span>01</span> Destination
                </li>
              </Link>
              <Link to="crew">
                <li>
                  <span>02</span> Crew
                </li>
              </Link>
              <Link to="technology">
                <li>
                  <span>03</span> Technology
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
