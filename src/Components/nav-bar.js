import { Link } from "react-router-dom";

export const NavBarComponent = ({ showMenu, menuClickHandler }) => {
  return (
    <nav className="nav">
      <div className="nav-row">
        <div>
          <img src="assets/shared/logo.svg" alt="" className="nav-logo" />
        </div>
        <div className="desktop-menu">
          <ul>
            <li>Home</li>
            <li>Destination</li>
            <li>Crew</li>
            <li>Technology</li>
          </ul>
        </div>
        <div className="mobile">
          <img
            src="assets/shared/icon-hamburger.svg"
            alt=""
            onClick={menuClickHandler}
          />
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <div onClick={menuClickHandler} className="close-icon">
            <img src="assets/shared/icon-close.svg" alt="" />
          </div>
          <div className="mobile-menu-div">
            <ul>
              <li>
                <Link to="/">
                  <span>00</span> Home
                </Link>
              </li>
              <li>
                <Link to="destinations">
                  <span>01</span> Destination
                </Link>
              </li>
              <li>
                <Link to="crew">
                  <span>02</span> Crew
                </Link>
              </li>
              <li>
                <Link to="technology">
                  <span>03</span> Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};
